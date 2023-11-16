import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();

import connectDb from './db/connectDb.js';

import productRoutes from './routes/product.routes.js'
import searchRoutes from './routes/search.routes.js'
import catRoutes from './routes/productsByCategory.js'

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

app.get('/', (req, res) => {
    res.send('<h1>My Flipmart : Ecommerce webApp </h1><p>Live Link : <a href="https://myflipmart.netlify.app/">https://myflipmart.netlify.app/</a></p>')
})

// app.use('/api', productRoutes)
// app.use('/api', searchRoutes)
// app.use('/api', catRoutes)
app.use('/api', [catRoutes, productRoutes, searchRoutes])

