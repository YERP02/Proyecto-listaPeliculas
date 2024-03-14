import type { Model, ObjectId } from 'mongoose'
import type { Request } from 'express'

export type Category = {
  Id?: string
  name: string
  description?: string
}

//TODO: Hay 2 tipos de category Request
//La de auteticacion local(email y contrasena)
//Falta definir el tipo para la autecificacion jwt
export type CategoryRequestType = Request & {
  category: Category
}

export type jwtRequestType = Request & {
  category: {
    sub: ObjectId
  }
}

export type CategoryModel = Model<Category>
