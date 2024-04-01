const {app, PORT} = require("./SRC/server");
const dbConnection = require ("./SRC/config/dbConnection.js");

dbConnection ()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`servidor express iniciado en el puerto ${PORT}`)
    });
}).catch(()=>{
    console.log(`No se pudo iniciar el servidor en el puerto ${PORT}`)
});