const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Product = require('../models/Product')
const Order = require('../models/Order')
const errorStructure = require('../configs/errorStructure')


const stripeCheckout = async (req, res, next) => {

	const { datas } = req.body

  let line_items = []

  let orderObject = {
    email: req.user.email,
    products: []
  }

try{

	for(let data of datas){
     let product = await Product.findById(data._id)

     
     let item = {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.title,
          },
          unit_amount: product.price*100,
        },
        quantity: data.quantity,
      }

      orderObject.products.push(product)
      line_items.push(item)
	}

  await Order.create(orderObject)

const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: 'payment',
    customer_email: req.user.email,
    success_url: `${process.env.DOMAIN_NAME}/success`,
    cancel_url: `${process.env.DOMAIN_NAME}/cancel`,
  });

  res.json({ sessionUrl: session.url });


	}catch(error){
		console.log(error)
    return next(error)
	}

}






const stripeCheckoutWebhook = (request, response) => {

  const sig = request.headers['stripe-signature'];
  let event;

  try {

    event = stripe.webhooks.constructEvent(request.body, sig, process.env.ENDPOINT_SECRET);

  } catch (error) {

    return errorStructure(400, [`Webhook Error: ${error.message}`]);

  }


try{

 if(event.type === 'payment_intent.succeeded'){

       paymentIntentSucceeded = event.data.object;
       let order = await Order.findOne({email: request.body.customer_email, status: 'pending'})
       order.status = 'paid'
       await order.save()

  }else if(event.type === 'payment_intent.failed'){
      paymentIntentSucceeded = event.data.object;
      let order = await Order.findOne({email: request.body.customer_email, status: 'pending'})
      await order.delete()
  }

  }catch (error){
     return errorStructure(400, [`Webhook Error: ${error.message}`]);

  }


  response.send();
}



module.exports = {
	stripeCheckout,
  stripeCheckoutWebhook,
}