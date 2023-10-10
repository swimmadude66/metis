# Metis
_A no-code solution for a variety of back-end services._


This project aims to create an open-source, no-code method for building APIs, chatbots, and more backend services visually. It is under active development, and more features will be added over time. Additionally, the goal is to allow 3rd-party service and "action" plugins to be loaded from github or configured by the server host. There is a standard definition for defining a `Service`, `Endpoint`, and `Action`, allowing all types of backend services to be compatible with the visual editor.

# Architecture of a Metis App
_This app is under development and is subject to change_

Metis organizes applications into `Services`, which represent a configured server, hosting a collection of `Endpoints` which in turn provide an ordered set of `Actions`.

## Services
A `Service` is where server configuration, communication protocols, and the set of `Endpoints` is defined. For example, a REST API service would accept configuration options like max body size, the port on which to host the API, and any options needed to configure cookie parsing. The communication protocol would be HTTP, so all endpoint actions would operate on HTTP Request objects, and should return HTTP Response objects. The endpoints themselves would declare a url path, and could access the params, query, other http-specific data.

## Endpoints
An `Endpoint` is the simplest entrypoint to your service. Services will pass incoming requests to their configured endpoints in order until a match is found. The endpoint provides a route or similar data point for matching, determined by the type of service. Depending on the type of endpoint, there may be other configuration, which is passed to each `Action` under the endpoint, in order.

## Actions
An `Action` operates on the data passed by the endpoint, and generates a response. Some actions can be chained, allowing a middleware pattern, while others simply return data or an error to the requester. Example actions: 
- auth middleware which reads cookies and returns user session info
- data retrieval to lookup and return some json data
- document action to serve some html for SSR or static websites
- catch-all error action to return an error for bad requests

---
# Roadmap
- [ ] Create basic definitions for common types
- [ ] Build first built-in service, route, middleware, and action
- [ ] Bootstrap simple visual editor for above
- [ ] Create "Deployer" process to export/host created backend service
- [ ] Establish Marketplace for external plugins 