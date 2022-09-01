const express = require("express")
const app = express()

const logger = require("./logger")
const authorize = require("./authorize")

// req => middleware => res

// app.use('/api',logger) // only api

// app.use([logger, authorize]) // used for all: ;

app.get("/", (req, res) => {
  res.send("Home")
})

// app.use(logger) //not apply to Home

app.get("/about", (req, res) => {
  res.send("About")
})

app.get("/api/products", (req, res) => {
  res.send("Products")
})

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user)
  res.send("Items")
})

app.listen(5000, () => {
  console.log("server listening in port 5000...")
})
