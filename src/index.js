import dotenv from 'dotenv'
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    //listening for error 
    app.on("error" , (error)=>{
        console.log("error in listening!!",error)
    })

    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port:${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongo DB connection failed!!!", err);
    
})











/*
(async () => {
    try{
        await mongoose.connect(`${process_params.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()

connection can be done here also but for making the codebase more redable and clean we make an another file for db connection in DB and import it
*/