document.getElementById("bookForm").addEventListener("submit",submitForm);

function formClean (){
    document.getElementById("bookForm").reset();
} 

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData (event.target);

    const title = formData.get("title")
    const year = formData.get("year") 
    const author = formData.get("author") 
    const genre = document.querySelectorAll("input[name='genre']:checked")
    const poster = formData.get("poster") 
    const editorial= formData.get("editorial")

    if(!title || !year || !author|| !poster || !editorial || genre.length === 0 ){
        alert(" Por favor completa todos los campos y selecciona por lo menos un genero");
        return ;
    }
    
    const yearInput = parseInt (year);
    if (isNaN(yearInput)  || (yearInput < 1800  || yearInput > 2030)) {
        alert('El año debe estar entre 1800 y 2030.');
        return;
    }
    
    const selectedGenres = Array.from(genre).map(checkbox => checkbox.value)
    console.log({title:title,
        author:author,
        poster:poster,
        editorial:editorial,
        year:yearInput,
        genre:selectedGenres,})

    axios.post("http://localhost:3000/books", {
        
        title:title,
        author:author,
        poster:poster,
        editorial:editorial,
        year:yearInput,
        genre:selectedGenres,

    })
    .then(response=>{
        alert("El libro se ha creado correctamente");
        console.log(response.data)
        formClean();
    })
    .catch(error=>{
        console.error("Error al enviar los datos: ", error);
        alert("Hubo un error al crear el libro, por favor intenta de nuevo");

    });
}
