const mongoose = require("mongoose");

const connectDB = mongoose.connect(uri, {
  useUnifiedTopoly: true,
  findOneAndModify: false,
  useUserCreateIndex: true,
});

module.exports = connectDB;
