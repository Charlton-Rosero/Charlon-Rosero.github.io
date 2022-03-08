const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

//  const Country = new Schema( {
//     name: { type: String, required: true },
//  },

//  {timestamps: true},
//  )

// const Recipe = new Schema(
//     {
//       name: { type: String, required: true },
//       country: Country ,
//       ingredients:{type: String, required: true},  
//       image: { type: String, required: true }
//     },
//     { timestamps: true }
//   );

// IGNORE FOR NOW
  const Recipe = new Schema(
    {
      name: { type: String, required: true },
      country:{type: Schema.Types.String, ref: 'Countries'} , 
      ingredients:{type: String, required: true},  
      image: { type: String, required: true }
    },
    { timestamps: true }
  );

 
  
  module.exports = mongoose.model(`recipes`, Recipe);