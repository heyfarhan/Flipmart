import mongoose from 'mongoose'


const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URI)
        console.log(`Connected to ${{ connect }}`)
    }
    catch (err) {
        console.log(`Error : ${err}`)
    }
}
export default connectDb;