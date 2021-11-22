const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const MonthlySalesSchema = mongoose.Schema({
  month: { type: String, required: true },
  refinance: { type: Number, required: true },
  purchase: { type: Number, required: true },
  MonthlySalesObjectId: { type: Schema.Types.ObjectId }
});

MonthlySalesSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('MonthlySales', MonthlySalesSchema);
