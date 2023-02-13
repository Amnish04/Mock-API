module.exports = function() {
 const { faker } = require("@faker-js/faker");
 const _ = require("lodash");

 return {
    users: _.times(50, function(i) {
        return {
            id: i,
            userType: faker.helpers.arrayElement(["admin", "viewer"]),
            // name: faker.helpers.arrayElement(["Amnish", "Alex"]),
            name: faker.name.firstName(),
            email: faker.internet.email(this.name),
            pwd: faker.internet.password(10, true),
            dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
        }
    })
 };
}