import express from 'express'
import { Category } from '../types/category.type'
import CategoryService from '../services/category.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'

const router = express.Router()
const service = new CategoryService()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const Category: Category = req.body
    const newCategory = await service.create(Category)

    res.status(201).json(newCategory)
  }
)

router.get(
  '/', //passport lo uso para tener que poner el token
  passport.authenticate('jwt', { session: false }),
  async (req: UserRequestType, res, next) => {
    try {
      const { user } = req
      const categories = await service.findAll()
      //const statusNo = categories ? 200 : 400
      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const category = await service.findById(req.params.id)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const category = await service.findById(req.query.name as string)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

export default router
