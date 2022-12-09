const recentAPI = `${process.env.JIKAN_API}/recommendations/anime`;

const axios = require('axios');

const getRecentAnimeRecommendations = async () => {
  const res = await axios.get(recentAPI);
  return res.data;
};

module.exports = {
  getRecentAnimeRecommendations,
};
