const axios = require('axios');

const topAPI = `${process.env.JIKAN_API}/top`;

const getTopAnime = async () => {
  const res = await axios.get(`${topAPI}/anime`);
  return res.data;
};

const getTopReviews = async () => {
  const res = await axios.get(`${topAPI}/reviews`);
  return res.data;
};

module.exports = {
  getTopAnime,
  getTopReviews,
};
