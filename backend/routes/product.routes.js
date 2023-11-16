import { Router } from "express";
import getProductDetails from "../controllers/getProductDetails.js";

const router = Router()

router.route('/product/:product').get(getProductDetails)

export default router
