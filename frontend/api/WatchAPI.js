const axios = require('axios');

const watchAPI = `${process.env.JIKAN_API}/watch`;

const getWatchRecentEpisodes = async () => {
  const res = axios.get(`${watchAPI}/episodes`);
  return res.data;
};

const getWatchPopularEpisodes = async () => {
  const res = axios.get(`${watchAPI}/episodes/popular`);
  return res.data;
};

const getWatchRecentPromos = async () => {
  const res = axios.get(`${watchAPI}/promos`);
  return res.data;
};

const getWatchPopularPromos = async () => {
  const res = axios.get(`${watchAPI}/promos/popular`);
  return res.data;
};

module.exports = {
  getWatchRecentEpisodes,
  getWatchPopularEpisodes,
  getWatchPopularPromos,
  getWatchRecentPromos,
};
