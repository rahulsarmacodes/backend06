import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//its and npm package called crocess origin resource sharing to connect frontend with backend
app.use(cors({
    origin: ProcessingInstruction.env.CORS_ORIGIN,
    credentials: true
}))

//built in in express for accapting json
app.use(express.json({
    limit: "16kb"
}))

//built in in express for encoding the url
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

//to store files and folder that anyone can access
app.use(express.static("puiblic"))

app.use(cookieParser())

export { app }