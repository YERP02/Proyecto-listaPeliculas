import { Schema, model } from 'mongoose'
import { Movie, MoviesModel } from '../types/movie.type'

const Movies = new Schema<Movie, MoviesModel>({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  cast: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  }
})

export default model('Movie', Movies)
