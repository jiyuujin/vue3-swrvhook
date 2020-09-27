const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')

app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 9000

// GET http://localhost:9000/api
// app.get('/api', function (req, res) {
//   res.json({
//     message: 'Hello,world'
//   })
// })

router.use('/api/article', require('./routes/article.js'))

app.use(router)

app.listen(port)
console.log('listen on port ' + port)
