const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  title:  {
    type: String,
    required: true,
  },
  img:{
    type: String,
    required: true,
  },
  price:  {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
},
{
    timestamps: true
}
)


const Product = mongoose.model('products', productSchema)

module.exports = Product