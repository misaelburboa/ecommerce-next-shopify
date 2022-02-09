import React, { Children, isValidElement, useState } from "react"
import styles from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={cn(styles.arrow, {
        [styles.arrowLeft]: props.left,
        [styles.arrowRight]: !props.left,
        [styles.arrowDisabled]: disabled,
      })}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

const ProductSlider: React.FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className={cn(styles.root, "navigation-wrapper")}>
        <div ref={sliderRef} className="keen-slider h-full transition-opacity">
          {Children.map(children, (child) => {
            if (isValidElement(child)) {
              // return {
              //   ...child,
              //   props: {
              //     ...child.props,
              //     className: `${
              //       child.propstyles.className ? `${child.propstyles.className}` : ""
              //     } keen-slider__slide`,
              //   },
              // }

              return React.cloneElement(child, {
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`,
              })
            }

            return child
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className={styles.leftControl}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className={styles.rightControl}
            />
          </>
        )}
      </div>
    </>
  )
}

export default ProductSlider
