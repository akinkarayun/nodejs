const { readFile, writeFile } = require("fs").promises
// const util = require("util")

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("./content/read.txt", "utf8")
    const second = await readFile("./content/read-1.txt", "utf8")
    await writeFile(
      "./content/result-easier.txt",
      `hey this is awasome ${first}, ${second}`
    )
    console.log(first, second)
  } catch (err) {
    console.log(err)
  }
}

start()

// getText("./content/read.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
