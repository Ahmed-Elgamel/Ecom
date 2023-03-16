const express = require('express')
const { addProductToCart, removeProductFromCart, calculateCartCost, checkOut } = require('../controller/cartController')


const router = express.Router()



router.post('/', addProductToCart)

router.post('/remove', removeProductFromCart)

router.post('/getCartPrice', calculateCartCost)

router.post('/checkOut', checkOut)



module.exports = router