const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  addressName: {
    type: String,
    required: true,
  },
  addressType: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    default: null,
  },
  companyTax: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Address', AddressSchema);
