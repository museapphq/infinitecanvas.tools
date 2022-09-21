const NUMBER_OF_ITEMS_TO_SELECT = 4

const IndexRandomGallery = ({ galleryItems }) => {
  const filePathToName = (filePath) =>
    filePath.match(/([^/]*).md$/g)[0].replace(".md", "")

  const galleryMap = galleryItems.reduce((map, { file, frontmatter }) => {
    map[filePathToName(file)] = { frontmatter }
    return map
  }, {})

  console.log(galleryMap)

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

// - Whiteboarding: Miro, FigJam,
// - Design: Sketch, Figma, Xd
// - Thinking: Muse, Concepts, MindNode, Heptabase, Kinopio
// - Wildcard: Felt, Nodes, Origami, Bezel
