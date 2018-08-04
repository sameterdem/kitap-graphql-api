const mongoose = require('mongoose');

const { Schema } = mongoose;

const BoxSchema = new Schema({
  boxName: {
    type: String,
    required: true,
  },
  boxDescription: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('Box', BoxSchema);
