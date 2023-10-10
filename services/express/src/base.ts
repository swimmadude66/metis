import type { MetisService } from '@metis/common/src/defs/service'
import type { MetisEndpoint } from '@metis/common/src/defs/endpoint'

import {type Request as ExpressRequest} from 'express'

export interface ExpressServiceConfig {
  // API config
  port: number

}

export class ExpressServiceBase implements MetisService {

  name = 'Express'
  id = 'com.metis.express'

  constructor(config?: ExpressServiceConfig) {
    Object.assign(this, {...config})
  }

}

export enum ExpressMethod {
  GET = 'get',
  HEAD = 'head',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  CONNECT = 'connect',
  OPTIONS = 'options',
  TRACE = 'trace',
  PATCH = 'patch',
  ALL = 'all',
}

export interface ExpressEndpointConfig {
  route: string
  method: ExpressMethod
}


export class ExpressEndpointBase implements MetisEndpoint<ExpressRequest> {
  name = 'Express Endpoint'
  id = 'com.metis.express.endpoint'
  method: ExpressMethod
  route: string

  constructor({route, method}: ExpressEndpointConfig) {
    this.method = method
    this.route = route
  }
}


