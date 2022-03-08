const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema( {
    country: { type: String, required: true },
    lamb_dishes:{type: String, required: true}
 },

 {timestamps: true},
 )

 module.exports = mongoose.model('Countries', Country)


 //IGNORE FOR NOW