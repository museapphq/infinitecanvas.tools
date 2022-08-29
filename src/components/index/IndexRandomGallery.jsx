const NUMBER_OF_ITEMS_TO_SELECT = 4

const IndexRandomGallery = ({ galleryItems }) => {
  const shuffled = galleryItems.sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, NUMBER_OF_ITEMS_TO_SELECT)

  return (
    <ul class="grid grid-cols-4 gap-24 px-32">
      {selected.map(({ frontmatter: { title, description } }) => (
        <li class="p-24 bg-brown bg-opacity-5 rounded-4">
          <h2 class="mb-4 sans-20 text-gray">{title}</h2>
          <p class="serif-16 text-brown text-opacity-80">{description}</p>
        </li>
      ))}
    </ul>
  )
}

export default IndexRandomGallery
