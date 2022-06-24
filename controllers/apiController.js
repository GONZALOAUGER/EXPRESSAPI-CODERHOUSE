/* contenedor principal de productos */
const Contenedor = require("../Contenedor");
const contenedorProductos = new Contenedor("./productos.txt");

/* cargar algunos productos iniciales */
contenedorProductos.save({title: "EL PADRINO", price: 400, thumbnail: "https://es.web.img3.acsta.net/pictures/18/06/12/12/12/0117051.jpg?coixp=49&coiyp=27"})
contenedorProductos.save({title: "LIGHTYEAR", price: 300, thumbnail: "https://www.shoppingpatagonia.com.ar/wp-content/uploads/2022/06/poster-lightyear.png"})
contenedorProductos.save({title: "PROYECTO X", price: 12, thumbnail: "https://brendaforever.files.wordpress.com/2012/06/project-x-poster11.jpg?w=840"})


const getAllProducts = (req, res)=>{
    res.json(contenedorProductos.getAll());
}

const getProductById = (req, res)=>{
    res.json(contenedorProductos.getById(Number(req.params.id)));
}

const postProduct = (req, res)=>{
    res.json(contenedorProductos.save(req.body))
}

const putProduct = (req, res)=>{
    res.json(contenedorProductos.saveById(Number(req.params.id), req.body));
}

const deleteProductById = (req, res)=>{
    res.json(contenedorProductos.deleteById(Number(req.params.id)));
}

module.exports = {contenedorProductos, getAllProducts, getProductById, postProduct, putProduct, deleteProductById}