import { ObjectId } from 'mongoose'
import Movies from '../models/movie.model'
import { Movie, MoviesModel } from '../types/movie.type'
import boom from '@hapi/boom'
import { CATEGORY_REFERENCE } from '../models/category.model'

class MovieService {
  async create(movie: Movie, categoryId: ObjectId) {
    const newMovie = await Movies.create(movie).catch((error) => {
      console.log('Could not save movie')
    })
    console.log(movie)
    console.log(newMovie)

    const existingMovie = await this.findById((newMovie as any)._id)

    return existingMovie.populate([{ path: 'category', strictPopulate: false }])
  }

  async findAll(filters) {
    const movies = await Movies.find({ ...filters })
      .populate([{ path: 'category', strictPopulate: false }])
      .catch((error) => {
        console.log('Error while connecting to the DB ', error)
      })
    if (!Movies) {
      throw boom.notFound('There are not movies')
    }

    return movies
  }

  async findById(id: string) {
    const movie = await Movies.findById(id).catch((error) => {
      console.log('Error while connecting to the DB ', error)
    })

    if (!movie) {
      throw boom.notFound('Category not faund')
    }

    return movie
  }

  async findByName(name: string) {
    const movie = await Movies.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movie) {
      throw boom.notFound('Category not found')
    }
  }

  async findByEmail(email: string) {
    const movie = await Movies.findOne({ email }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movie) {
      throw boom.notFound('Category not found')
    }
  }

  async findByDirect(director: string) {
    const movie = await Movies.findOne({ director }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movie) {
      throw boom.notFound('Category not found')
    }
  }
}

export default MovieService
