const axios = require("axios");
const renderBook = require("./renderBook");
//const apiUrl= "http://localhost:3000/books";
const tempData = require ("./tempData");

tempData.forEach(book => {
  renderBook(book);
});
/*axios.get(apiUrl)
  .then(response => {
     rendersCards(response.data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });
*/

