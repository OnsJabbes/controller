const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const ItemSchema = new mongoose.Schema({
    _id: {
     type: ObjectID,
     required: true,
     default: () => new ObjectID(),
    },
    status: {
        type: String,
        enum: ['Lost', 'Found'],
        required: true
    },
    title : {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: ObjectID,
      ref: 'Location',
      required: true,
    },
    image: {
        type: String,
        required: true
      },
    phone : {
        type: String,
        required: true
      },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
      },  
    
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;