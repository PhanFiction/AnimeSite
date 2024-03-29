require('dotenv').config();

const PORT = process.env.PORT;
const API = process.env.API;
const TOKEN = process.env.TOKEN;
process.env.NODE_ENV === 'test' 
  ? MONGODB_URL = process.env.TEST
  : MONGODB_URL = process.env.MONGODB_URL,

module.exports = {
  PORT,
  MONGODB_URL,
  API,
  TOKEN
}