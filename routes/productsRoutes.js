import express from 'express'
const router = express.Router()

import { createReview,createProduct,getReview,deleteProduct,getAllProduct,updateProduct,showStatsProduct,updateOrAddFieldToAllProducts } from "../controllers/productsController.js";

router.route('/').post(createProduct).get(getAllProduct)
//remember about :id
router.route('/stats').get(showStatsProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)
router.route('/updateall').post(updateOrAddFieldToAllProducts);
router.route('/createreview').post(createReview)
router.route('/createreview/:id').get(getReview)


export default router