const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
  title:{
    type:String,
    trim:true,
    minLength:2,
    maxLength:200,
    required:true,

  }
})

module.exports = mongoose.model("Genre",genreSchema)