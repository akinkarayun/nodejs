// const express = require("express")
// const app = express()

// app.get("/", (req, res) => {
//   console.log("user does the request")
//   res.status(200).send("Home Page")
// })

// app.get("/about", (req, res) => {
//   console.log("user does the request")
//   res.status(200).send("About Page")
// })

// app.all("*", (req, res) => {
//   console.log("user does the request")
//   res.status(404).send("<h1>Resource not fount</h1>")
// })

// app.listen(5000, () => {
//   console.log("server is listening on port 5000")
// })

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

const express = require("express")
const path = require("path")
const app = express()

//if you have js, css code or any image you can put them in public folder and use them like down below with express
app.use(express.static("./public"))

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./content/index.html"))
// })

app.all("*", (req, res) => {
  res.status(404).send("Resource not found")
})

app.listen(5000, () => {
  console.log(`server is listening on port 5000....`)
})
