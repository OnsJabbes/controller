const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const NotificationSchema = {
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
  item: {
    type: ObjectID,
    ref: 'Item',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};
const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;
