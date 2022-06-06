const Mongoose = require('mongoose');

const FileSchema = new Mongoose.Schema(
  {
    isPrivate: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
      default: 'Untitled',
    },
    token: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('file', FileSchema);
