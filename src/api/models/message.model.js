const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const MessageSchema = mongoose.Schema({
  from: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Number, required: true || Date.now() },
  MessageObjectId: { type: Schema.Types.ObjectId }
});

MessageSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Message', MessageSchema);
