const mongoose = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const {productSchema} = require('./Product');
const {orderSchema} = require('./Order');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        // select: false,
        max: 1024,
        min: 6
    },
    cart: {
        type: [{type: productSchema , unique:true}] 
    },
    wishlist: {
        type: [{type: productSchema , unique:true}] 
    },
    admin: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

const validate = (data) => {
    const schema = Joi.object({
      name: Joi.string().required().label('Name'),
      email:Joi.string().required().label('Email'),
      password: passwordComplexity().required().label('Password')
});
    return schema.validate(data);
} 

module.exports = {User,validate};