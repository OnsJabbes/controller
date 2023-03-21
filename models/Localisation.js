const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const localisationSchema = {

  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
 
};

const Localisation = mongoose.model('Localisation', localisationSchema);

module.exports = Localisation ;