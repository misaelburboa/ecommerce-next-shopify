import styles from "./Usernav.module.css"

import useCart from "@framework/cart/use-cart"
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from "@components/ui/context"
import Link from "next/link"
import { LineItem } from "@common/types/cart"

const Usernav: React.FC = () => {
  const { openSidebar } = useUI()

  const { data } = useCart()

  const itemsCount =
    data?.lineItems.reduce((count: number, item: LineItem) => {
      return count + item.quantity
    }, 0) ?? 0

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={openSidebar} />
          {itemsCount > 0 && (
            <span className={styles.bagCount}>{itemsCount}</span>
          )}
        </li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
