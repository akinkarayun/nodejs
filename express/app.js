const express = require("express")
const app = express()

const { products } = require("./data")

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProduct)
})

app.get("/api/products/:productId", (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productId } = req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  )
  //if product === undefined
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist")
  }
  res.json(singleProduct)
})

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req)
  console.log(req.params)
  res.send("Hello World")
})

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.includes(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No Product Exist")
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
  // console.log("Hello World")
})

app.listen(5000, () => {
  console.log("server listening in port 5000...")
})
