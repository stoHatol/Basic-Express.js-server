const express = require('express')
const app = express()
const port = 'change it with the port'
app.get('/', (req, res) => {
  res.send('YOUR TEXT')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

//Enjoy ! 