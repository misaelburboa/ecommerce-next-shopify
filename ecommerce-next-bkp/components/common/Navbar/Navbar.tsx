import { Usernav } from "@components/common"
import { Container } from "@components/ui"
import Link from "next/link"

import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-row md:py-6">
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={styles.logo}>NEX_STORE</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Accessories</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8"><Usernav /></div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
