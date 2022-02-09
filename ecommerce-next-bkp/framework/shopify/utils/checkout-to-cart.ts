import { Checkout, Maybe } from "@framework/schema";
import { normalizeCart } from "./normalize";

const checkoutToCart = (checkout?: Maybe<Checkout>) => {
  if (!checkout) {
    throw new Error('Missing Checkout Object')
  }
  return normalizeCart(checkout)
}

export default checkoutToCart