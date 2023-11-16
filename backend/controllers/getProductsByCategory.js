import Product from "../models/productSchema.js";

async function getProductsByCategory(req, res) {

    let page = Number(req.query.page) || 1;
    let cat_id = req.query.id;
    let result = await Product.find({ cat_id: cat_id }).skip((page - 1) * 10).limit(10)
    let count = await Product.count({ cat_id: cat_id })

    res.status(200).json({ length: count, result });
    res.end();

}
export default getProductsByCategory