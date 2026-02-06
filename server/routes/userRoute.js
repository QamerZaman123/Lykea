import express from 'express'
import {register,login,adminLogin} from '../controllers/userController.js'


const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.post('/admin-login',adminLogin)

// router.post('/logout',logout)
// router.post('/send-otp',userAuth,sendVerifyOtp)
// router.post('/verify-email',userAuth,verifyEmail)
// router.post('/is-auth',userAuth,isAuthenticated)
// router.post('/reset-password',resetPassword)
// router.post('/send-reset-otp',sendResetOtp)
// router.get('/get-user-data', userAuth ,getUserData)

export default userRouter;