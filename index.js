const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const fs = require('fs');
const Generator = require('./generate');
const data = Generator();

try {
    fs.writeFileSync('db.json', JSON.stringify(data, null, '\t'));
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();
    const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

    server.use(middlewares);
    server.use(router);

    server.listen(port);
}
catch(err) {
    console.log(err);
    exit(1);
}
