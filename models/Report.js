const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const ReportSchema = {
    _id: {
      type: ObjectID,
      required: true,
      default: () => new ObjectID(),
    },
    user: {
      type: ObjectID,
      ref: 'User',
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  };

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report ;
