const mongoose = require('mongoose');
const config = require('./config.js');


const { connect, set } = mongoose;

set('strictQuery', true);

(async () => {
  try {
    console.log(config.MONGO_URI)
    const db = await connect(config.MONGO_URI);
    console.log(`Conectado con la base de datos ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
})()

