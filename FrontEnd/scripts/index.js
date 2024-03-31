const axios = require("axios");
const renderBook = require("./renderBook");
const apiUrl= "http://localhost:3000/books";

axios.get(apiUrl)
  .then(response => {
     rendersCards(response.data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });


