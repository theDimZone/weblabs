const express = require('express')
const app = express()
const cool = require('cool-ascii-faces')
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port} ${cool()}`)
})
