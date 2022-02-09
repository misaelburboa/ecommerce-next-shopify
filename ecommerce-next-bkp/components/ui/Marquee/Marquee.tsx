import { ReactNode } from "react"
import Ticker from "react-ticker"
import cn from "classnames"

import styles from "./Marquee.module.css"

interface Props {
  children: ReactNode[]
  variant?: "primary" | "secondary"
}

const Marquee: React.FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = cn(styles.root, {
    [styles.secondary]: variant === "secondary",
  })

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default Marquee
