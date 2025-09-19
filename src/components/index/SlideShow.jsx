import { useEffect, useState, useRef, Component } from "react"
import joinClasses from "../../utilities/joinClasses"

const MILLISECONDS_PER_SLIDE = 8000

const Template = () => (
  <div className="flex flex-col">
    <div className="aspect-[16/9] w-full"></div>
    <div className="h-24 mt-8"></div>
  </div>
)

const Figure = ({ title, imgSrc, sourceUrl, active }) => (
  <figure
    className={joinClasses(
      "flex flex-col absolute top-0 right-0 bottom-0 left-0 ease-linear duration-500",
      active ? "opacity-1" : "opacity-0 pointer-events-none"
    )}
  >
    <img src={imgSrc} alt={title} />
    <figcaption className="h-24 mt-8 font-sans text-gray text-16 text-opacity-80">
      {title}
      {sourceUrl && (
        <>
          {" ("}
          <a
            className="text-gray text-opacity-60 hover-dim slide"
            href={sourceUrl}
          >
            source
          </a>
          {")"}
        </>
      )}
    </figcaption>
  </figure>
)

class SlideShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      intervalId: null
    }
    this.setActiveIndex = this.setActiveIndex.bind(this)
  }

  componentDidMount() {
    const { items, delayMilliseconds } = this.props

    setTimeout(() => {
      const intervalId = setInterval(
        () => {
          const nextIndex = this.state.activeIndex + 1
          if (nextIndex === items.length) {
            this.setActiveIndex(0)
          } else {
            this.setActiveIndex(nextIndex)
          }
        },

        MILLISECONDS_PER_SLIDE
      )
      this.setState((prevState) => ({
        ...prevState,
        intervalId: intervalId
      }))
    }, delayMilliseconds)
  }

  setActiveIndex(index) {
    this.setState((prevState) => ({
      ...prevState,
      activeIndex: index
    }))
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const { items } = this.props

    return (
      <div>
        <div className="relative flex flex-col space-y-8">
          <Template />
          {items.map((item, index) => (
            <Figure
              {...item}
              key={index}
              active={index === this.state.activeIndex}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default SlideShow
