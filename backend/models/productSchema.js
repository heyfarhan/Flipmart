import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
    },
    cat_id: {
        type: String,
        required: true,
    },
    list_price: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    average_rating: {
        type: Number,
        required: true,
    },
    image_path_custom_820: {
        type: String,
        default: "NA",
    },
    full_description: {
        type: String,
        required: true,
    },
    total_ratings: {
        type: Number,
        required: true,
    },
    product_gallery: [
        {
            is_main: String,
            detailed_image: String,
            thumb_image: String,
            main_image: String,
            "320X320": String,
            "200X200": String,
            "160X160": String,
            "50X50": String,
            "30X30": String,
            "280X1": String,
            "320X1": String,
            "640X1": String,
            "820X1": String,
        },
    ],
    discount_percentage: {
        type: Number,
        required: true,
    },
    extra_images: [
        {
            "30X30": String,
            "50X50": String,
            "160X160": String,
            "200X200": String,
            "280X1": String,
            "320X320": String,
            "320X1": String,
            "640X1": String,
            "820X1": String,
        },
    ],
}, {
    strict: false  // This allows fields not specified in the schema to be saved
});

const Product = mongoose.model('Product', productSchema);


export default Product
