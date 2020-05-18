let express = require("express");
let app = express();
const getProducts = require("./getProducts");


app.get('/api/products', getProducts);
app.get('/api/products/:id', getProducts )

const SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => console.log("Hello"));