const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  products: {
  	type: [{}],
  	required: true,
  },
  status: {
  	type: String,
    default: 'pending',
  }
},
{
    timestamps: true
}
)


const Order = mongoose.model('orders', orderSchema)

module.exports = Order