
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Band = new Schema( {
    name: { type: String, required: true },
    Genre:{type: String, required: true},
    year_formed:{type:String, required: true},
    members:{type: Schema.Types.ObjectId, ref: 'Members'}, // referrence member.js
    albums:{type: Schema.Types.ObjectId, ref: 'Albums'}, // reference album
    total_albums_sold: {type: String, required: false}
 },

 {timestamps: true},
 )

 module.exports = mongoose.model('Bands', Band)
