const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Song = new Schema( {
    title: { type: String, required: true },
    writer:{type: String, required: true}, 
    runtime:{type:String, required: true},
    singer:{type:String, required: true}
},
 {timestamps: true},
)

 module.exports = mongoose.model('Songs', Song)