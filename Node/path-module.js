const path = require("path")

const pathName = path.join("/content//", "subfolder", "test.txt")

const base = path.basename(pathName)

const absolutePath = path.resolve(__dirname, "content", "subfolder", "text.txt")

console.log(pathName)
console.log(base)
console.log(absolutePath)
