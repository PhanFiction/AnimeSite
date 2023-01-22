const axios = require('axios');

const randomAPI = `${process.env.JIKAN_API}/random/anime`;

const getRandomAnime = async () => {
  const res = await axios.get(randomAPI);
  return res.data;
};

module.exports = {
  getRandomAnime,
};
