import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅MongoDB Connected Successfully');
    } catch (error) {
        console.log('❌ MongoDB connection Failed !')
        console.error(error.messsage);
        process.exit(1);
    }
}
export default connectDB