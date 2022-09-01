const { readFileSync, writeFileSync } = require("fs")
// const fs  = require("fs")

const first = readFileSync("./content/read.txt", "utf8")
const second = readFileSync("./content/read-1.txt", "utf8")

writeFileSync(
  "./content/newfile.txt",
  `Here is the result : ${first}, ${second}`
)

console.log(first)
console.log(second)
