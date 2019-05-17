const express = require('express')
const graphQLHTTP = require('express-graphql')
const schema = require('./schema/Schema')
const app = express()

app.use(
  '/api',
  graphQLHTTP({
    schema: schema,
    graphiql: true
  })
)

app.listen(9000, function() {
  console.log('Server running at port 9000.')
})
