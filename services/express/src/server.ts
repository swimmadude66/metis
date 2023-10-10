import { createServer } from 'http'
import { ExpressEndpointBase, ExpressMethod, ExpressServiceBase, ExpressServiceConfig } from './base'
import Express from 'express'

export class ExpressEndpoint extends ExpressEndpointBase {

  register = (app: Express.Router, appConfig: Record<string, any>) => {
    app[this.method](this.route, (req: Express.Request, res: Express.Response, next: () => void) => {
      if (this.method === ExpressMethod.ALL || req.method?.toLowerCase() === this.method) {
        // do stuff
        return next()
      } else {
        return next()
      }
    })
  }
}

export class ExpressService extends ExpressServiceBase {

  constructor(private config: ExpressServiceConfig) {
    super(config)
  }

  impl(endpoints: ExpressEndpoint[] = []) {
    // config stuff
    const app = Express()
    // set up cookie details
    // set up body parser

    endpoints.forEach((endpoint) => {
      endpoint.register(app, this.config)
    })

    app.listen(this.config.port)
  }

}