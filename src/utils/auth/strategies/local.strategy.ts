import { Strategy } from 'passport-local'
import bcrypt from 'bcrypt'
import Boom from '@hapi/boom'

const options = { userNameField: ' email', passwordFirld: 'password' }

const LocalStrategy = new Strategy(options, async (email, password, next) => {
  try {
    //const user = awair service.findByEmail(email)
    //valodar contraseña
  } catch (error) {
    next(error, false)
  }
})
