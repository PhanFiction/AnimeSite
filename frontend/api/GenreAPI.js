const genreAPI = `${process.env.JIKAN_API}/genres/anime`;
const axios = require('axios');

const getAnimeGenres = async () => {
  const res = await axios.get(genreAPI);
  return res.data;
};

module.exports = {
  getAnimeGenres,
};
