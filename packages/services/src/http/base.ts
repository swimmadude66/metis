import type { MetisService } from '@metis/common/src/defs/service'


export interface HTTPServiceConfig {
  // API config
  port: number

}

export class HTTPServiceBase implements MetisService {

  name = 'REST API'
  id = 'com.metis.http'

  constructor(config?: HTTPServiceConfig) {
    Object.assign(this, {...config})
  }

  

}