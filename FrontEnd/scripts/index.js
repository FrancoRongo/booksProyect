const axios = require("axios");
const showBooks = require("./renderBook");
const apiUrl= "http://localhost:3000/books";

axios.get(apiUrl)
  .then(response => {
     showBooks(response.data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });


