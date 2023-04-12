const Product = require('../models/Product')

const errorStructure = require('../configs/errorStructure')


const products = async (req, res) => {
    try {
        let allProducts = await Product.find()
        
        res.json(allProducts)
    } catch (error) {
        
    }
    
}


const product = async (req, res, next) => {
    const { id } = req.params

    try {
        const aProduct = await Product.findOne({_id: id})
        
        if(!aProduct){
            return next(errorStructure(404, ['Product not found']))
        }

        res.json(aProduct)

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = { 
    products,
    product,
}