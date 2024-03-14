import type { Model } from 'mongoose'
import type { Request } from 'express'
import { Category } from './category.type'

export type Movie = {
  id?: string
  title: string
  duration: string
  director: string
  cast: string
  category: Category
  description?: string
  createAt?: Date
  lastModified?: Date
}

/*export type UserRequestType = Request & {
  user: User
}*/

export type MoviesModel = Model<Movie>
