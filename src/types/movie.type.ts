import type { Model } from 'mongoose'
import type { Request } from 'express'

export type Movie = {
  id?: string
  title: string
  duration: string
  director: string
  cast: string
  description?: string
  createAt?: Date
  lastModified?: Date
}

/*export type UserRequestType = Request & {
  user: User
}*/

export type MoviesModel = Model<Movie>
