const express = require('express')
const router = express.Router()

const assets = require('./assets/assets.controller')
router.use('/get-top', assets)
module.exports = router
