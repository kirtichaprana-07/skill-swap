
import express from 'express'
import ensureAuthenticated from '../Middlewares/Auth.js'

const router = express.Router();

router.get('/',ensureAuthenticated,(req,res) =>{
    // console.log('---Login user detail---',req.user)
  res.status(200).json([
    {
        name:"mbile",
        price:100000
    },
    {
        name:"iphone",
        price:100000
    },
  ])
})

export default router;