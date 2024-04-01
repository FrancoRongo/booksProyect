const bookCardsContainer = document.getElementById("bookCards");
const showBooks = (data) => {
  data.forEach(book => {
    renderBook(book);
  });
}
function renderBook(bookData) {

  const bookElement = document.createElement("article");
  const containerBook = document.createElement("div");
  containerBook.classList.add("card", "mb-3", "shadow","card-size")
  containerBook.innerHTML=` 
   <img src= " ${bookData.poster}" class="card-img-top" alt="${bookData.title}">
   <div class="card-body"> 
   <h5 class= "card-title">${bookData.title}</h5>
   <p class= "card-text"><strong>Author:</strong>${bookData.author}</p>
   <p class= "card-text"><strong>Year:</strong>${bookData.year}</p>
   <p class= "card-text"><strong>Gender:</strong>${bookData.genre}</p>
   <p class= "card-text"><strong>Editorial:</strong>${bookData.editorial}</p>
   </div>
  `

    bookCardsContainer.appendChild(bookElement);
    bookElement.appendChild(containerBook);
  }

  module.exports=showBooks;