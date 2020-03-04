const mongoose = require("mongoose")
const { Schema, model } = mongoose

 commentsSchema = new Schema ({

  title:String,
  message:String,
  date:String,
  time:String,
  phone:Number,
  status:Boolean,
  autor:String,

  
},
{
timestamps: true
}

)


module.exports = model('Comments', commentsSchema);
