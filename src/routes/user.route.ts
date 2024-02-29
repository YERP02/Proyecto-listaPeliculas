import express from 'express'
import { User } from '../types/user.type'
import UserService from '../services/user.service'
import boom from '@hapi/boom'

const router = express.Router()
const service = new UserService()

router.post('/', async (req, res, next) => {
  try {
    const user: User = req.body
    if (!user.email || !user.password || !user.name) {
      throw boom.badRequest('User is required')
    }
    const newUser = await service.create(user)
    res.status(201).json({ user: user })
  } catch (error) {
    next(error)
  }
})

export default router
