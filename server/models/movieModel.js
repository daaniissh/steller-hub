const mongoose = require("mongoose");

const movieSchema = {
  imageName: String,
  title: {
    type: String,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength: 255,
    required: true,
  },
  amazon:{
    type: String,
    
  },
  USAamazon:{
    type: String,
    
  },
  BZamazon:{
    type: String,
    
  },
  flipkart:{
    type: String,
  },
  productsNum:{
    type:String,
  },
  ratings: {
    type: Number,
    min: 0,
    required: true,
  },

  genre: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
    },
  ],

};
module.exports = mongoose.model("Movie", movieSchema);
