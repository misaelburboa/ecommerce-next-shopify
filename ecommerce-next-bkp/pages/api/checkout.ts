import { SHOPIFY_CHECKOUT_ID_COOKIE, SHOPIFY_CHECKOUT_URL_COOKIE } from "@framework/const"
import { NextApiRequest, NextApiResponse } from "next"

export default function checkout(req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req
  const checkoutUrl = cookies[SHOPIFY_CHECKOUT_URL_COOKIE]

  if (checkoutUrl) {
    // res.setHeader('Set-Cookie', `${SHOPIFY_CHECKOUT_ID_COOKIE}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
    res.redirect(checkoutUrl)
  } else {
    res.redirect("/")
  }
}
