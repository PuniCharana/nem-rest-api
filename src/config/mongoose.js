const mongoose = require('mongoose');

// Connection events
mongoose.connection.on('connected', () => {
  console.info('# Mongo Database connected');
});
mongoose.connection.on('error', err => {
  console.error(`# MongoDB connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.info('# Mongo Database disconnected');
});

const mongoUri = 'mongodb://localhost/test';

// Connect to MongoDB
exports.connect = () => {
  mongoose.connect(
    mongoUri, {
      keepAlive: 1,
      /**
      * DeprecationWarning: collection.ensureIndex is deprecated.
      * Use createIndexes instead.
      */
      useCreateIndex: true,
      /**
       * DeprecationWarning: current URL string parser is deprecated,
       * and will be removed in a future version. To use the new parser,
       * pass option { useNewUrlParser: true } to MongoClient.connect.
       */
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  return mongoose.connection;
};