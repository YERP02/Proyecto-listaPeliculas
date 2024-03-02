import express from 'express'
import passport from 'passport'
import type { User } from '../types/user.type'
import { UserRequestType as RequestType } from '../types/user.type'
import UserService from '../services/user.service'
import jwt from 'jsonwebtoken'
import { config } from '../config/config'

const route = express.Router()
const service = new UserService()

route.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req: RequestType & User, res, next) => {
    try {
      const { user } = req
      //sub is the id of the subscribe
      const payload = { sub: user.id }
      const token = jwt.sign(payload, config.jwtSecret)
      res.status(200).json({ user, jwt: token })
    } catch (error) {
      next(error)
    }
  }
)

export default route
