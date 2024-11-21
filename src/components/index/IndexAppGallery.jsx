// one list will be chosen from random and displayed
const lists = [
  ["muse","miro", "sketch", "origami_studio"],
  ["figma", "milanote", "muse", "concepts"],
  ["miro", "muse", "figma", "tldraw"]
]

const getRandomItemFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)]

const GalleryItem = ({ title, image, url }) => (
  <li className="space-y-8" key={title}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="aspect-[16/9] hover:opacity-90 transition-opacity">
        <img src={`/images/gallery/${image}`} alt={`Screenshot of ${title}`} />
      </div>
      <h2 className="font-serif text-16 text-gray hover:text-black transition-colors">{title}</h2>
    </a>
  </li>
)

const IndexAppGallery = ({ galleryItems }) => {
  const filePathToName = (filePath) =>
    filePath.match(/([^/]*).md$/g)[0].replace(".md", "")

  // turn list into key-value store with key being name of .md file
  const galleryMap = galleryItems.reduce((map, { file, frontmatter }) => {
    map[filePathToName(file)] = frontmatter
    return map
  }, {})

  //check if all items in the list of lists actually exist in the galleryMap
  lists.forEach((list) =>
    list.forEach((item) => {
      if (!galleryMap[item])
        console.error(
          `"${item}" doesn't map to one of the .md files. Did you spell it wrong?`
        )
    })
  )

  // get one of the lists at random
  const listToRender = getRandomItemFromArray(lists)

  return (
    // for each item, get the frontmatter from the galleryMap and then render the GalleryItem
    <ul className="grid w-full grid-cols-1 540:grid-cols-2 860:grid-cols-4 gap-x-24 640:gap-x-48 gap-y-48">
      {listToRender.map((item, index) => (
        <GalleryItem {...galleryMap[item]} key={index} />
      ))}
    </ul>
  )
}

export default IndexAppGallery
