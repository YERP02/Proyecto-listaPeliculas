import express from 'express'
import mongoose, { type ConnectOptions } from 'mongoose'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler'
import routerApi from './routes'
import {config} from './config/config'

const {mongoUri, port} = config

const app = express()
//app.use(express.json())
//const port = 3010

const connectDB = () => {
    mongoose
    .connect(mongoUri)
    .then(() => {
        console.log('Connected to Databases')
    })
    .catch((error) => {
        console.log('Could not connect to Database', error)
    })
}

app.use(express.json())
routerApi(app)

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
    connectDB()
})


app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

