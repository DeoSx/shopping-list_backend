import cors from 'cors'
import express from 'express'
import App from './app'
import db from './db'
import categoryRoutes from './routes/categories'

const routes = [categoryRoutes]
const middlewares = [cors(), express.json()]

const app = new App({ port: 5000, routes, middlewares })

app.listen()
db()
