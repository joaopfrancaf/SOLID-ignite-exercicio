import Fastify from 'fastify'
import { userRoutes } from './http/controller/user/routes'

export const fastify = Fastify()

fastify.register(userRoutes)