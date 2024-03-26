function renderBook(bookData) {
    const bookCardsContainer = document.getElementById("bookCards");

    const card = document.createElement("div");
    card.classList.add("card", "mb-3", "shadow","image-card-size");

    const img = document.createElement("img");
    img.src = bookData.poster;
    img.classList.add("card-img-top");
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = bookData.title;
    cardBody.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("card-text");
    author.textContent = "Autor: " + bookData.author;
    cardBody.appendChild(author);

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.textContent = "Año: " + bookData.year;
    cardBody.appendChild(year);

    const genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.textContent = "Género: " + bookData.genre.join(", ");
    cardBody.appendChild(genre);

    const editorial = document.createElement("p");
    editorial.classList.add("card-text");
    editorial.textContent = "Editorial: " + bookData.editorial;
    cardBody.appendChild(editorial);

    card.appendChild(cardBody);

    bookCardsContainer.appendChild(card);
  }

  module.exports=renderBook