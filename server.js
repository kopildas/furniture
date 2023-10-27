import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
import connectDB from './config/dbConn.js'
import mongoose from 'mongoose'
dotenv.config()

// Connect to MongoDB
connectDB();

const app = express()


//routers
import authRouter from './routes/authRoutes.js'
import productsRouter from './routes/productsRoutes.js'


// middleware
notFoundMiddleware


app.use(express.json())


app.get('/', (req,res) => {
    res.send('Welcome')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/products',productsRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

mongoose.connection.once('open', ()=> {
    console.log('Connected to MongoDB');
    app.listen(port,()=> console.log(`server is listening on port ${port}....`))
})