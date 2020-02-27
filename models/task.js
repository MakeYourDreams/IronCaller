const mongoose = require("mongoose")
const { Schema, model } = mongoose

 taskSchema = new Schema ({

  title:String,
  message:String,
  time: Number,
  phone: Number,
  
})


module.exports = model('Task', taskSchema);
