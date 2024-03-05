import Fastify from 'fastify'
import { userRoutes } from './http/controller/user/routes'
import { refeicaoRoutes } from './http/controller/refeicao/routes'
import fastifyCookie from '@fastify/cookie'

export const fastify = Fastify()

fastify.register(fastifyCookie)
fastify.register(userRoutes)
fastify.register(refeicaoRoutes)