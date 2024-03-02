import jwt from 'jsonwebtoken'
import { config } from '../../config/config'

const verifyjwt = (token: string) => {
  if (!token) return null
  try {
    const decoded = jwt.verifyjwt(token, config.jwtSecret)

    if (decoded) return null

    return decoded
  } catch (error) {
    console.log(error)
  }
}

const extractFromJwt = (authorization: string) => {
  const token = authorization.split(' ')[1]

  return verifyjwt(token)
}

export { verifyjwt, extractFromJwt }
