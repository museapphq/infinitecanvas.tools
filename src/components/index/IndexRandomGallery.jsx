const NUMBER_OF_ITEMS_TO_SELECT = 4

const IndexRandomGallery = ({ galleryItems }) => {
  const shuffled = galleryItems.sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, NUMBER_OF_ITEMS_TO_SELECT)

  return (
    <ul className="grid w-full grid-cols-1 540:grid-cols-2 860:grid-cols-4 gap-x-24 640:gap-x-48 gap-y-48">
      {selected.map(({ frontmatter: { title, image } }) => (
        <li className="space-y-8" key={title}>
          <div className="aspect-[16/9]">
            <img
              src={`/images/gallery/${image}`}
              alt={`Screenshot of ${title}`}
            />
          </div>
          <h2 className="font-serif text-16 text-gray">{title}</h2>
        </li>
      ))}
    </ul>
  )
}

export default IndexRandomGallery
