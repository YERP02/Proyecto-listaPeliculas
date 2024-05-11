import express from 'express'
import mongoose from 'mongoose'
import {
  logErrors,
  errorHandler,
  boomErrorHandler
} from './middlewares/error.handler'
import routerApi from './routes'
import { config } from './config/config'
import passport from 'passport'
import './utils/auth/index'
import cors from 'cors'

const { mongoUri, port } = config

const app = express()

const connectDB = () => {
  mongoose.connect(mongoUri)
}

app.use(passport.initialize())
app.use(cors())
app.use(express.json())
routerApi(app)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
