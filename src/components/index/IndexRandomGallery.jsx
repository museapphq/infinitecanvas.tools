const NUMBER_OF_ITEMS_TO_SELECT = 4

const getRandomItemFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)]

const IndexRandomGallery = ({ galleryItems }) => {
  const filePathToName = (filePath) =>
    filePath.match(/([^/]*).md$/g)[0].replace(".md", "")

  // turn list into key-value store with key being name of .md file
  const galleryMap = galleryItems.reduce((map, { file, frontmatter }) => {
    map[filePathToName(file)] = { frontmatter }
    return map
  }, {})

  // each list refers to a slot in the four items shown on the homepage
  const itemsToChooseFrom = [
    ["miro", "fig_jam"],
    ["sketch", "figma"],
    ["muse", "concepts"],
    ["felt", "nodes"]
  ]

  //check if all items in the list of lists actually exist in the galleryMap
  itemsToChooseFrom.forEach((list) =>
    list.forEach((item) => {
      if (!galleryMap[item])
        console.error(
          `"${item}" doesn't map to one of the .md files. Did you spell it wrong?`
        )
    })
  )

  return (
    <div>sdfsdf</div>
    // <ul className="grid w-full grid-cols-1 540:grid-cols-2 860:grid-cols-4 gap-x-24 640:gap-x-48 gap-y-48">
    //   {selected.map(({ frontmatter: { title, image } }) => (
    //     <li className="space-y-8" key={title}>
    //       <div className="aspect-[16/9]">
    //         <img
    //           src={`/images/gallery/${image}`}
    //           alt={`Screenshot of ${title}`}
    //         />
    //       </div>
    //       <h2 className="font-serif text-16 text-gray">{title}</h2>
    //     </li>
    //   ))}
    // </ul>
  )
}

export default IndexRandomGallery
