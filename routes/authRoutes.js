import express from 'express'
const router = express.Router()

import { register,login,updateUser,getall } from '../controllers/authController.js'

router.route('/register').post(register)
router.route('/getalluser').get(getall)
router.route('/login').post(login)
// router.route('/updateUser').patch(updateUser) 
router.route('/:id').put(updateUser)

export default router