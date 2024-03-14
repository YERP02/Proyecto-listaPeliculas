import express from 'express'
import { Movie } from '../types/movie.type'
import MovieService from '../services/movie.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'
import { jwtRequestType, CategoryRequestType } from '../types/category.type'
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new MovieService()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: jwtRequestType, res) => {
    const {
      category: { sub }
    } = req
    //console.log(category)
    const movie: Movie = req.body
    const newMovie = await service.create(movie, sub as unknown as ObjectId)

    res.status(201).json(newMovie)
  }
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: UserRequestType, res, next) => {
    try {
      const { user } = req
      const filters = req.query
      const movies = await service.findAll(filters)
      console.log(movies)

      res.status(200).json(movies)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/:id', async (req, res, next) => {
  try {
    const movie = await service.findById(req.params.id)
    res.status(200).json(movie)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const movie = await service.findByName(req.query.name as string)
    res.status(200).json(movie)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const movie = await service.findByEmail(req.query.email as string)
    res.status(200).json(movie)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const movie = await service.findByDirect(req.query.director as string)
    res.status(200).json(movie)
  } catch (error) {
    next(error)
  }
})

export default router
