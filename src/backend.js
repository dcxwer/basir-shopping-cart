const express = require('express')
const app = express()
const mongoose = require('mongoose')
const shortId = require('shortid')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/basir', {}).then(() => console.log('Mongo online'))


const Product = mongoose.model('Product', new mongoose.Schema({
    _id: { type: String, default: shortId.generate() },
    title: String,
    descripion: String,
    image: String,
    price: Number,
    availableSizes: [String],
}))


app.get('/api/products', async (req, res) => {
    const products = await Product.find({})
    
    res.json({products})
})


app.post('/api/products', async (req, res) => {
    let product = new Product(req.body) 
    product = await product.save()
    res.json(product)
})

app.delete('/api/products/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))