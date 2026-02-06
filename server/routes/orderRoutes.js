import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/Auth.js'

const orderRouter = express.Router()

// Admin
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Order options
orderRouter.post('/place',authUser,placeOrder) //cash on delivery
orderRouter.post('/stripe',authUser,placeOrderStripe) //stripe
orderRouter.post('/razorpay',authUser,placeOrderRazorpay) //razorpay

// User
orderRouter.post('/userorders',authUser,userOrders)

orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter