import type { MetisEndpoint } from '@metis/common/src/defs/endpoint'


export class HTTPEndpoint implements MetisEndpoint<any> {
  name = 'HTTP endpoint'
  id = 'com.metis.http.endpoint'
}