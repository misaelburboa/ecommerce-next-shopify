import { SHOPIFY_CHECKOUT_ID_COOKIE } from "../const"
import Cookies from "js-cookie"

const getCheckoutId = () => Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE)

export default getCheckoutId
