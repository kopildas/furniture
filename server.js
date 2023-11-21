import 'express-async-errors'
import cors from 'cors'
import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
import connectDB from './config/dbConn.js'
import mongoose from 'mongoose'
import Products from "./models/Products.js";

dotenv.config()

// Connect to MongoDB
connectDB();

const app = express()

//cors settings

const allowedOrigins = ['https://woodhy-backend.onrender.com','http://localhost:4001', 'http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.use(cors(corsOptions));


//routers
import authRouter from './routes/authRoutes.js'
import productsRouter from './routes/productsRoutes.js'


// middleware
// app.use(notFoundMiddleware);


app.use(express.json())


app.get('/', async(req,res) => {
  // res.render('./client/src/main.jsx')
    // const getProduct= await Products.find({}).toArray();
    // console.log(getProduct);
    res.json({ message: 'Welcome' });
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