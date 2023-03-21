
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messages: {
      message:{
        sender: DataTypes.STRING,
        receiver: DataTypes.STRING,
        Text: DataTypes.STRING,
        allowNull: false,
      }
  }
  },
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;