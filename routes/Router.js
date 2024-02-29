const Router = require('express')
const router = new Router()
const requestController = require('../controllers/RequestController')

router.get('/request', requestController.get)
router.post('/request', requestController.post)

module.exports = router
