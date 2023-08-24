import mongoose from "mongoose";
import "dotenv/config.js";

let MONGO_URI= "mongodb+srv://aniket:1bNm4JxayGDLB7lu@cluster0.bpehmxh.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
	try {
		console.log(MONGO_URI);
		const conn = await mongoose.connect(MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
