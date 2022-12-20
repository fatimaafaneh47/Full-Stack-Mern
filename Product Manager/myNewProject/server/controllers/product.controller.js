const { response } = require('express');
const {Product} = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct= (request, response) => {
    const { title, price,description} = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product=> response.json(product))
        .catch(err => response.json(err));
}
module.exports.getAllproducts =(request,response) =>{
    Product.find({})
        .then(products =>response.json(products))
        .catch(err => response.json(err))
}
module.exports.getproduct=(request,response) =>{
    Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err =>response.json(err))
}