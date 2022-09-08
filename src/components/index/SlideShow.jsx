import { useEffect, useState, useRef } from "react"
import joinClasses from "../../utilities/joinClasses"

const Template = () => (
  <div className="flex flex-col p-24">
    <div className="aspect-[3/2] w-full"></div>
    <div className="h-24 mt-8"></div>
  </div>
)

const Figure = ({ title, imgSrc, sourceUrl, active }) => (
  <figure
    className={joinClasses(
      "p-24 flex flex-col absolute top-0 right-0 bottom-0 left-0 ease-linear duration-500",
      active ? "opacity-0 pointer-events-none" : "opacity-1"
    )}
  >
    <img src={imgSrc} alt={title} />
    <figcaption className="h-24 mt-8 serif-16 text-brown">
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

// taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const SlideShow = ({ items, classes }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useInterval(() => {
    const nextIndex = activeIndex + 1
    if (nextIndex === items.length) {
      setActiveIndex(0)
    } else {
      setActiveIndex(nextIndex)
    }
  }, MILLISECONDS_PER_SLIDE)

  return (
    <div
      style={{ backgroundImage: 'url("/images/backgrounds/dot_grid.svg"' }}
      className={classes}
    >
      <div className="relative flex flex-col px-24 pt-24 pb-16 space-y-8">
        <Template />
        {items.map((item, index) => (
          <Figure {...item} key={index} active={index === activeIndex} />
        ))}
      </div>
    </div>
  )
}

export default SlideShow
