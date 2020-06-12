const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
  console.log('server listening at http://localhost:3000')
})