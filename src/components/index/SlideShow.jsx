import { useEffect, useState, useRef, Component } from "react"
import joinClasses from "../../utilities/joinClasses"

const Template = () => (
  <div className="flex flex-col p-48">
    <div className="aspect-[3/2] w-full"></div>
    <div className="h-24 mt-8"></div>
  </div>
)

const Figure = ({ title, imgSrc, sourceUrl, active }) => (
  <figure
    className={joinClasses(
      "p-48 flex flex-col absolute top-0 right-0 bottom-0 left-0 ease-linear duration-500",
      active ? "opacity-0 pointer-events-none" : "opacity-1"
    )}
  >
    <img src={imgSrc} alt={title} />
    <figcaption className="h-24 mt-8 serif-16 text-brown text-center">
      {title}
      {sourceUrl && (
        <>
          {" ("}
          <a
            className="text-brown text-opacity-80 hover-dim slide"
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

const MILLISECONDS_PER_SLIDE = 4000

class SlideShow extends Component {
  constructor(props) {
    super(props)
    const { items } = this.props

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

    this.state = {
      activeIndex: 0,
      intervalId: intervalId
    }
    this.setActiveIndex = this.setActiveIndex.bind(this)
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
