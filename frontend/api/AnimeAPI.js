const axios = require('axios');
const animeAPI = `${process.JIKAN_API}/anime`;

const getAnimeFullById = async (animeId) => {
  const res = await axios.get(`${animeAPI}/${animeId}/full`);
  return res.data;
};

const getAnimeById = async (animeId) => {
  const res = await axios.get(`${animeAPI}/${animeId}`);
  return res.data;
};

const getAnimeEpisodes = async (animeId) => {
  const res = await axios.get(`${animeAPI}/${animeId}/episodes`);
  return res.data;
};

const getAnimeEpisodeById = async (animeId, episode) => {
  const res = await axios.get(`${animeAPI}/${animeId}/episodes/${episode}`);
  return res.data;
};

const getAnimeVideos = async (animeId) => {
  const res = await axios.get(`${animeAPI}/${animeId}/videos`);
  return res.data;
};

const getAnimeVideosEpisodes = async (animeId) => {
  const res = await axios.get(`${animeAPI}/${animeId}/videos/episodes`);
  return res.data;
};

const getAnimeSearch = async () => {
  const res = await axios.get(animeAPI);
  return res.data;
};

module.exports = {
  getAnimeFullById,
  getAnimeById,
  getAnimeEpisodes,
  getAnimeEpisodeById,
  getAnimeVideos,
  getAnimeVideosEpisodes,
  getAnimeSearch,
};
