import Movies from '../models/movie.model'
import { Movie, MoviesModel } from '../types/movie.type'
import boom from '@hapi/boom'

class MovieService {
  async create(movie: Movie) {
    const newMovie = await Movies.create(movie).catch((error) => {
      console.log('Could not save movie')
    })
    return newMovie
  }
  async findAll() {
    const movies = await Movies.find().catch((error) => {
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
}

export default MovieService
