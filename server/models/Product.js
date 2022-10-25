const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	image: {
		select: false,
		data: Buffer,
		contentType: String,
	},
});
const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productSchema };
