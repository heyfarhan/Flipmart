import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import Product from '../models/productSchema.js'
import connectDb from './connectDb.js';
import cors from 'cors'
import products from '../data/allProducts.json' assert { type: 'json' }
const app = express();

app.use(cors())

const PORT = process.env.PORT || '3000';


const start = async () => {
    try {
        await connectDb();
        app.listen(PORT, async () => {
            console.log(`app listening on Port : ${PORT}`)
        })
    }
    catch (err) {
        console.log(`Error : ${err}`)
    }
}
start();

app.get('/insertAll', async (req, res) => {
    // await Product.insertMany([...products])
    res.status(200).json({ success: true })
    res.end();
})
