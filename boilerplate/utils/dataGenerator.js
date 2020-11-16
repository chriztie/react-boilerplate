module.exports = function (){
    const faker = require("faker");
    const _ = require("lodash");    

    return {
        users: _.times(100, function (index){
            return {
                id: index + 1,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                title: faker.name.title(),
                email: faker.internet.email(),                
                avatar: faker.internet.avatar()
            } 
        }),
        products: _.times(500, function(index){
            return {
                id: index + 1,
                name: faker.commerce.productName(),
                photo: faker.image.food(),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),                           
            }
        })
    }
}