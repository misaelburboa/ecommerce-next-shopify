import { Navbar } from "@components/common"
import Footer from "@components/common/Footer"
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"

import styles from "./Layout.module.css"
import { useUI } from "@components/ui/context"
import { ApiProvider } from "@framework"

const Layout: React.FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <ApiProvider>
      <div className={styles.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default Layout
