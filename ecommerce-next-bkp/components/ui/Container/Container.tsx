import { ComponentType, HTMLAttributes, ReactNode } from "react"

interface Props {
  children: ReactNode | ReactNode[]
  as?: ComponentType<HTMLAttributes<HTMLElement>>
}
const Container: React.FC<Props> = ({ children, as: Element = "div" }) => {
  return <Element className="px-6 mx-auto max-w-8xl">{children}</Element>
}

export default Container
