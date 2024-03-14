import { Schema, model } from 'mongoose'
import { Movie, MoviesModel } from '../types/movie.type'
import { CATEGORY_REFERENCE } from './category.model'

export const MOVIES_REFERENCE = 'movies'

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
  category: {
    type: Schema.Types.ObjectId,
    ref: CATEGORY_REFERENCE
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
