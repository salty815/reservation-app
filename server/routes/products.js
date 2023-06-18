const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async function (req, res) {
    foundProducts = await Product.find({})
    res.json(foundProducts)
})

router.get('/:productId', async function (req, res) {
    const productId = req.params.productId
    foundProduct = await Product.findById(productId)
    // if (Product.findById(productId) == null) {
    // res.status(422).send[{ errors: [{ title: 'Product error', detail: 'Product not found' }] }]
    // }
    res.json(foundProduct)
})


module.exports = router