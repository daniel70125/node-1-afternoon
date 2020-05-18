const products = require("../products.json");

const getProducts = (req, res) => {
    if (req.query.price){
        let filtered = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(filtered)
    }
    res.status(200).send(products)
}

module.exports = getProducts