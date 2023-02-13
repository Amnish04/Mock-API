# Mock-API

A mock api using json-server for mocking endpoints and faker for generating fake data following a particular schema.

URL: https://fake-api-json-server-f42f.onrender.com

## Endpoints ##
1. Users
* GET /users - Generates mock users according to the set schema
* GET /users/:id - Gets a user with a particular id (404 if doesn't exists)
* POST /users - Add a new user to the users data set (Send  JSON in the body of object)
* PUT /users - Update an existing user in the users data set (Send an object with exisiting id)
* DELETE /users/:id - Delete an existing user in the users data set
