'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;


var shopSchema = Schema( {
    id: Number,
    name: String,
    category: String,
    price: Number,
    stock: String,
} );

module.exports = mongoose.model( 'Clothing', shopSchema );
