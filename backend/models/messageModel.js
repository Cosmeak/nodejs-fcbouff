const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  }
},  
{
    timestamps: true,
})

module.exports = mongoose.model('Message', MessageSchema)