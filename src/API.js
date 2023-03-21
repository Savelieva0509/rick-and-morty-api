import axios from 'axios';

export const allCharacters = (page) => {
  const response = axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return response;
};

export const characterDetails = id => {
  const response = axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response;
};

