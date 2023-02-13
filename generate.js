const { faker } = require("@faker-js/faker");
const _ = require("lodash");

// Root Export
module.exports = function() {

 return {
    users: _.times(50, generateUser)
 };
}

/*
 Generator Functions
*/
function generateUser(id) {
    return {
        id: id,
        userType: faker.helpers.arrayElement(["admin", "viewer"]),
        name: faker.name.firstName(),
        email: faker.internet.email(this.name),
        pwd: faker.internet.password(10, true),
        dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
    }
}
