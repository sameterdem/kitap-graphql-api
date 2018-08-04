const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChildrenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
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
});

module.exports = mongoose.model('Children', ChildrenSchema);
