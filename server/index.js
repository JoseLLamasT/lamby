require('dotenv').config();
const express = require('express');
const router = require('./router');
const cors = require('cors');
const db = require('./model/index');

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = (async function () {
  try {
    await db.sequelize.sync();
    console.log('DB is connected');
    await app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT} 🚀`);
    });
  } catch (error) {
    console.log('Error while connecting to server', error);
  }
})();
