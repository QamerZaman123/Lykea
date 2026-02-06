import express from 'express'
import { addToCart, updateCart, getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/Auth.js'

const CartRoutes = express.Router()

CartRoutes.post('/get',authUser,getUserCart)
CartRoutes.post('/add',authUser,addToCart)
CartRoutes.post('/update',authUser,updateCart)

export default CartRoutes