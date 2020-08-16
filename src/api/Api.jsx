import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;

const API_TOKEN = "b823688b32c2291b6c40399472cbe91b";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmsAll () {
  const url = 'http://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&query=battleship'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFilmUnique (id) {
  const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getTopFilms (page) {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_TOKEN + '&language=en-US&page='+ page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


// API/TMDBApi.js

// const API_TOKEN = "b823688b32c2291b6c40399472cbe91b";

// export function getFilmsFromApiWithSearchedText (text) {
//   const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  
// }