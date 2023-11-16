import Product from "../models/productSchema.js";

async function getProductDetails(req, res) {

    let result = await Product.findOne({ product_id: req.params['product'] })
    res.status(200).json(result);
    res.end();
}

export default getProductDetails