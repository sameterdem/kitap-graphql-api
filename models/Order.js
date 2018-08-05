const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  children: {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    birthDay: {
      type: String,
    },
    birthYear: {
      type: String,
    },
    gender: {
      type: Number,
    },
    childInfo: {
      type: String,
      default: null,
    },
  },
  address: {
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
  },
  boxId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  orderDate: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
