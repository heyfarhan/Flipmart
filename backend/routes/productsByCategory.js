import { Router } from "express";
import getProductsByCategory from "../controllers/getProductsByCategory.js";

const router = Router()

router.route('/cat').get(getProductsByCategory)

export default router