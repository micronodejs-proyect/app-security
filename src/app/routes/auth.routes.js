const express = require('express')
const router = express.Router()

const { getUsersByCredentials, } = require('../controllers/auth.controller')

router.post('/getToken', getUsersByCredentials) 

module.exports = router