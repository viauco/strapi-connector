import { getCookieValue, setCookies, prepareSetCookie, prepareKillCookie } from '../helpers/nodeCookieHelpers'
import obtainSession from './guest/obtainSession'
import guestCart from './guest/cart'
import customerCart from './customer/cart'
import { COOKIES } from '../constants'

export default async function session(req, res) {
  const cookiesToSet = [];

  // ### 1 - LOGGED IN SESSION
  const tokenCookieValue = getCookieValue(req, COOKIES.APP_CUSTOMER_TOKEN)
  if (tokenCookieValue) {
    const customerCartData = await customerCart(tokenCookieValue)
    if (customerCartData.error) {
      return res.status(400).json({
        error: customerCartData.error,
      })
    }
    const { cart, customerCartId } = customerCartData
    cookiesToSet.push(prepareSetCookie(COOKIES.APP_CUSTOMER_TOKEN, tokenCookieValue, { maxAge: 3600 * 24 * 30 })) // renew customer token cookie for 30 more days
    cookiesToSet.push(prepareSetCookie(COOKIES.APP_CUSTOMER_CART_ID, customerCartId, { maxAge: 3600 * 24 * 30 })) // set/renew customer cart ID cookie for 30 days
    cookiesToSet.push(prepareKillCookie(COOKIES.APP_GUEST_CART_ID)) // kill guest cart ID cookie just in case (prevents possible cart merges issues)
    setCookies(res, cookiesToSet)
    return res.status(200).json({
      signedIn: true,
      cart,
    })
  }

  // ### 2 - GUEST SESSION
  // # 2.1 - Obtain returning guest session
  cookiesToSet.push(prepareKillCookie(COOKIES.APP_CUSTOMER_CART_ID)) // kill customer cart ID cookie just in case (prevents possible cart merges issues)
  const guestCartIdCookieValue = getCookieValue(req, COOKIES.APP_GUEST_CART_ID)
  if (guestCartIdCookieValue) {
    const guestCartData = await guestCart(guestCartIdCookieValue)
    if (guestCartData.error) {
      setCookies(res, cookiesToSet)
      return res.status(400).json({
        error: guestCartData.error,
      })
    }
    const { cart } = guestCartData
    cookiesToSet.push(prepareSetCookie(COOKIES.APP_GUEST_CART_ID, guestCartIdCookieValue, { maxAge: 3600 * 24 * 7 })) // renew cookie for 7 more days
    setCookies(res, cookiesToSet)
    return res.status(200).json({
      signedIn: false,
      cart,
    })
  }

  // # 2.2 - Obtain new guest session
  const obtainSessionData = await obtainSession()
  if (obtainSessionData.error) {
    setCookies(res, cookiesToSet)
    return res.status(400).json({
      error: obtainSessionData.error,
    })
  }
  const { guestCartId } = obtainSessionData
  cookiesToSet.push(prepareSetCookie(COOKIES.APP_GUEST_CART_ID, guestCartId, { maxAge: 3600 * 24 * 7 })) // set guest cart id cookie for 7 days
  setCookies(res, cookiesToSet)
  return res.status(200).json({
    signedIn: false,
    cart: {
      items: [],
    },
  })
}
