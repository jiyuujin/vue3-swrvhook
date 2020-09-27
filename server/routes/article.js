const express = require('express')
const router = express.Router()

// GET http://localhost:9000/api/article/test
router.get('/test', function (req, res) {
  res.json({
    message: 'This is article api'
  })
})

module.exports = router
