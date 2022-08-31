//npm init (step by step set up for package.json)
//npm init -y (skip and set it as default)

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
