import express, { Application } from 'express/index'

class App {
  public port: number
  public app: Application

  constructor(options: { port: number; routes: any; middlewares: any }) {
    this.port = options.port
    this.app = express()
    this.initMiddlewares(options.middlewares)
    this.initRoutes(options.routes)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on PORT ${this.port}`)
    })
  }

  private initRoutes(routes) {
    routes.forEach((item) => this.app.use('/api', item))
  }

  private initMiddlewares(middlewares) {
    middlewares.forEach((m) => this.app.use(m))
  }
}

export default App
