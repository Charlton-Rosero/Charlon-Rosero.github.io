
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Members = new Schema( {
    lead_guitar: { type: String, required: true },
    lead_guitar: { type: String, required: true },
    rythm_guitar:{ type: String, required: true },
    bass:{type: String, required: true},
    drums:{type: String, required: true},
    keyboard:{type:String, required: false},
    special_guest:{type:String, required: false} 
 },

 {timestamps: true},
 )

 module.exports = mongoose.model('Members', Members)
