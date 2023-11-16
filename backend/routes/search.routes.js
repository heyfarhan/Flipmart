import { Router } from "express";
import searchProducts from "../controllers/searchProducts.js";

const router = Router()

router.route('/searchProduct/:product').get(searchProducts)

export default router