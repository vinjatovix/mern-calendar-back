const mongoose = require('mongoose');

const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB O9');
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { dbConfig };
