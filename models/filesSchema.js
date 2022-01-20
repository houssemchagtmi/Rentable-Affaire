const mongoose = require("mongoose");
const { Schema } = mongoose;
const FilesSchema = new Schema({
  description: { type: String},
  image: { type: String, required: true },
  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model("files", FilesSchema);