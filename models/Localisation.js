const mongoose = require('mongoose');

const localisationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number
});

const Localisation = mongoose.model('Localisation', localisationSchema);

module.exports = Localisation;
