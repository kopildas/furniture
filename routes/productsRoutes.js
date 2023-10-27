import express from 'express'
const router = express.Router()

import { createProduct,deleteProduct,getAllProduct,updateProduct,showStatsProduct } from "../controllers/productsController.js";

router.route('/').post(createProduct).get(getAllProduct)
//remember about :id
router.route('/stats').get(showStatsProduct)
router.route('/:id').delete(deleteProduct).patch(updateProduct)

export default router