import axios from "axios";

const url = `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`;

export const getMovieLists = async (id = null) => {
  const response = await axios.get(url);
  return response.data.data.movies;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  console.log(response.data);
  return response.data;
};
