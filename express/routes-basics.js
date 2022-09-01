const express = require("express")
const app = express()

const { people } = require("./data")

app.use(express.static("./methods-public"))

//parse form data
app.use(express.urlencoded({ extended: true }))

//parse json

app.use(express.json())

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" })
  }
  res.status(201).send({ success: true, data: [...people, name] })
})

app.post("/api/people", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" })
  }
  res.status(201).send({ success: true, person: name })
})

app.post("/login", (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Please Provide Credentials")
})

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with the ${id} found` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: [newPeople] })
})

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with the ${id} found` })
  }

  const newPeople = people.filter((person) => {
    return person.id !== Number(id)
  })
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log("server listening in port 5000...")
})
