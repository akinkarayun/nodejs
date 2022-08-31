const { readFile, writeFile } = require("fs")
// const fs  = require("fs")

readFile("./content/read.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile("./content/read-1.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      "./content/asynnew.txt",
      `Here is the result: ${first} , ${second} `,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})
