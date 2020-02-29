const mongoose = require("mongoose")
const { Schema, model } = mongoose

 taskSchema = new Schema ({

  subjet:String,
  message:String,
  date:Date,
  time:Number,
  phone:Number,

  
})


module.exports = model('Task', taskSchema);
