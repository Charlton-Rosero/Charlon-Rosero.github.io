const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Song = new Schema( {
    title: { type: String, required: true },
    writer:{type: Schema.Types.Array, ref: 'Members'}, // reference a member
    runtime:{type:String, required: true},
    performed_by:{type:String, required: true}
},
 {timestamps: true},
)

 module.exports = mongoose.model('Songs', Song)