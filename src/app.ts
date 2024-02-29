import Fastify from 'fastify'
import { userRoutes } from './http/controller/user/routes'
import { refeicaoRoutes } from './http/controller/refeicao/routes'

export const fastify = Fastify()

fastify.register(userRoutes)
fastify.register(refeicaoRoutes)