const axios = require('axios');

const seasonsAPI = `${process.env.JIKAN_API}/seasons`;

const getSeason = async (year, season) => {
  const res = axios.get(`${seasonsAPI}/${year}/${season}`);
  return res.data;
};

const getSeasonNow = async () => {
  const res = axios.get(`${seasonsAPI}/now`);
  return res.data;
};

const getSeasonsList = async () => {
  const res = axios.get(`${seasonsAPI}`);
  return res.data;
};

const getSeasonUpcoming = async () => {
  const res = axios.get(`${seasonsAPI}/upcoming`);
  return res.data;
};

module.exports = {
  getSeason,
  getSeasonNow,
  getSeasonsList,
  getSeasonUpcoming,
};
