import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


// middleware
notFoundMiddleware


app.get('/', (req,res) => {
    res.send('Welcome')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`server is listening on port ${port}....`))