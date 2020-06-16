const app = require('./config/app');
const mongoose = require('./config/mongoose');
const {
  DEFAULT_PORT
} = require('./core/constants');

const port = process.env.PORT || DEFAULT_PORT;

/**
 * MongoDB
 * database connection
 */
mongoose.connect();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});