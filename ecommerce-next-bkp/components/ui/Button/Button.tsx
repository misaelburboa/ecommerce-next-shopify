import {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  ReactNode,
} from "react"
import cn from "classnames"

import styles from "./Button.module.css"
import { LoadingDots } from "@components/ui"
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  isLoading?: boolean
  Element?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string
}
const Button: React.FC<Props> = ({
  children,
  className,
  isLoading = false,
  Element = "button",
  ...rest
}) => {
  const rootClassName = cn(styles.root, className, {
    [styles.loading]: isLoading,
  })

  return (
    <Element type="button" className={rootClassName} {...rest}>
      {children}
      {isLoading && (
        <i className="pl-2 m-0 fex">
          <LoadingDots />
        </i>
      )}
    </Element>
  )
}

export default Button
