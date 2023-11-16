import Product from "../models/productSchema.js";

async function searchProducts(req, res) {

    const searchText = req.params['product'].split('-');

    let page = Number(req.query.page) || 1;

    const regexPattern = new RegExp(searchText.map(word => `(?=.*\\b${word}\\b)`).join(''), 'i');
    let result = await Product.find({ product: { $regex: regexPattern } }).skip((page - 1) * 10).limit(10)
    let count = await Product.count({ product: { $regex: regexPattern } })

    res.status(200).json({ length: count, result });
    res.end();

}
export default searchProducts