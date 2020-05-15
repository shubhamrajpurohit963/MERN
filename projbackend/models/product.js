const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 20
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 1000
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number,        
    },
    sold: {
        type: Number,
        default: 0
    },
    photo:{
        type: Buffer,
        contentType: String
    }


},
{timestamps: true}
);

module.exports = mongoose.model("Product",productSchema);