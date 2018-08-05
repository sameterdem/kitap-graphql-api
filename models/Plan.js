const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlanSchema = new Schema({
  boxId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  planName: {
    type: String,
    required: true,
  },
  planPrice: {
    type: String,
    required: true,
  },
  validityMonth: {
    type: Number,
    required: true,
  },
  planImg: {
    type: String,
    default: null,
  },
  planShipping: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('Plan', PlanSchema);
