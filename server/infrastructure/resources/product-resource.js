var async = require('asyncawait/async');
var await = require('asyncawait/await');
var productModel = require(__base + 'server/model/product');

function getProducts() {
    var products = await(productModel.find({}));
    return products;
}

function getProduct(id) {
    var product = await(productModel.findOne({_id:id}));
    return product;
}

function deleteProduct(id) {
    var product = await(productModel.remove({_id:id}));
    return product;
}

function updateProduct(productParam) {
    var product = await(productModel.update({_id:productParam._id},productParam));
    return product;
}

function addProduct(productParam) {
    var product = await(productModel.create(productParam));
    return product;
}

module.exports = {
    getProducts: async(getProducts),
    getProduct: async(getProduct),
    deleteProduct: async(deleteProduct),
    updateProduct: async(updateProduct),
    addProduct: async(addProduct)
};