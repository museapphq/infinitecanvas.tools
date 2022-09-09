import csv from "csvtojson"
import fs from "fs"

const FILE_PATH = "./list.csv"
const OUTPUT_DIRECTORY = "./output"

// https://stackoverflow.com/questions/52963900/convert-different-strings-to-snake-case-in-javascript
const snakeCase = (string) => {
  return string
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_")
}

const clearDirectory = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err
      })
    }
  })
}

const commasToArray = (field) => {
  if (!field || !field.includes(",")) return ""
  return `[${field
    .split(", ")
    .map((item) => `'${item}'`)
    .toString()}]`
}

const fileContents = ({
  Name,
  Platforms,
  URL,
  Multiplayer,
  usecases,
  description,
  fileName
}) =>
  `---
title: ${Name}
platforms: ${commasToArray(Platforms)}
url: ${URL}
usecases: ${commasToArray(usecases)}
image: ${fileName}.jpg
description: ${description}
multiplayer: ${(Multiplayer === "Yes").toString()}
---
`

const run = async () => {
  const records = await csv().fromFile(FILE_PATH)

  // filter out anything but rows with Status "Done"
  const doneRecords = records.filter((record) => record.Status === "Done")

  // add snake cased fileName
  doneRecords.forEach((record) => {
    if (!record.Name) {
      console.error("This app doesn't have a Name field" > record)
    }
    record.fileName = snakeCase(record.Name)
  })

  // create output directory if doesn't exist
  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true })

  // clear out directory
  clearDirectory(OUTPUT_DIRECTORY)

  doneRecords.forEach((record) => {
    fs.writeFileSync(
      `${OUTPUT_DIRECTORY}/${record.fileName}.md`,
      fileContents(record)
    )
  })
}

run()
