import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import CartRoutes from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoutes.js'

const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors({ origin: [
    process.env.FRONTEND_URL_ADMIN,
    process.env.FRONTEND_URL_CLIENT
] }))

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', CartRoutes)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("Api ")
})

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})