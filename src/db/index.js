// this file is for database coonnection only .This approch is used keep index.js file clean
//the connection created here will bw imported to og index.js

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try{
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
         
    }catch(error){
        console.log("MONGO_DB connection error:", error);
        process.exit(1)
    }
}

export default connectDB