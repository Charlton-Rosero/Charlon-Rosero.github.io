
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const album = new Schema( {
    name: { type: String, required: true },
    released:{ type: String, required: true },
    albums_sold:{type: String, required: true},
    song: {type: Schema.Types.Array, ref: 'Songs'},
 },

 {timestamps: true},
 )

 module.exports = mongoose.model('Albums', album)