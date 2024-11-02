import axios from "axios";

export const client = axios.create({
  baseURL: "https://sw-api.starnavi.io",
});

export const fetchHeroDetails = async (heroId: string) => {
  const response = await client.get(`/people/${heroId}/`);
  return response.data;
};

export const fetchFilmDetails = async (filmId: number) => {
  const response = await client.get(`/films/${filmId}/`);
  return response.data;
};

export const fetchStarshipDetails = async (starshipId: number) => {
  const response = await client.get(`/starships/${starshipId}/`);
  return response.data;
};
