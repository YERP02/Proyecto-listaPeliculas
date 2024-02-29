import { Schema, model } from 'mongoose'
import { User, UserModel } from '../types/user.type'
import { PHONE_NUMBER_REGEX, EMAIL_REGEX } from '../utils/constants'

const Users = new Schema<User, UserModel>({
  name: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    index: true,
    trim: true,
    match: [EMAIL_REGEX, 'Please enter a valid email']
  },
  password: {
    type: String,
    require: true
  },
  address: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
    trim: true,
    match: [PHONE_NUMBER_REGEX, 'Please enter a valid phone']
  },
  createAt: {
    type: Date,
    default: () => Date.now()
  },
  lastModified: {
    type: Date,
    default: () => Date.now()
  }
})

export default model('User', Users)
