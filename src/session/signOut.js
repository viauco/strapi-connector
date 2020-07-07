import get from 'lodash/get'
import revokeToken from './customer/revokeToken'
import obtainSession from './guest/obtainSession'
import { COOKIES } from '../constants'
import { getCookieValue, prepareKillCookie, prepareSetCookie, setCookies } from '../helpers/nodeCookieHelpers'

export default async function signOut(req, res) {
  try {
    const token = getCookieValue(req, COOKIES.APP_CUSTOMER_TOKEN)
    if (!token) {
      throw new Error(`${COOKIES.APP_CUSTOMER_TOKEN} cookie doesn\'t exist`)
    }

    const { result } = await revokeToken(token)
    if (!result) {
      throw new Error('An error occured during customer token revoke')
    }

    // obtain new session after successful sign out
    const { guestCartId } = await obtainSession()
    const cookiesToSet = []
    cookiesToSet.push(prepareSetCookie(COOKIES.APP_GUEST_CART_ID, guestCartId, { maxAge: 3600 * 24 * 7 })) // set guest cart id cookie for 7 days
    cookiesToSet.push(prepareKillCookie(COOKIES.APP_CUSTOMER_TOKEN)) // kill customer token cookie
    cookiesToSet.push(prepareKillCookie(COOKIES.APP_CUSTOMER_CART_ID)) // kill customer cart id cookie
    setCookies(res, cookiesToSet)

    return res.status(200).send({
      signedIn: false,
      cart: {
        items: [],
      },
    })
  } catch (error) {
    return res.status(400).send({
      error: get(error, 'message', 'An error occurred during sign out'),
    })
  }
}
