import { Container } from "@components/ui"
import Link from "next/link"
import styles from "./Hero.module.css"

interface Props {
  headline: string
  description: string
}

const Hero: React.FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container as={"div" as any}>
        <div className={styles.root}>
          <h2 className={styles.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={styles.description}>{description}</p>
            <Link href="#">
              <a className={styles.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
