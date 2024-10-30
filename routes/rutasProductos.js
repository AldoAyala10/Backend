const rutas = require("express").Router();
const { mostrarProductos, busXId, deleteProd, newProd, editarProd } = require("../bd/productoBD");


rutas.get("/", async (req, res) => {
    const productosValidos = await mostrarProductos();
    res.json(productosValidos);
});
rutas.post("/nuevoProducto", async (req, res) => {
    const productoValido = await newProd(req.body);
    res.json(productoValido);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const productoValido = await busXId(req.params.id);
    res.json(productoValido);
});
rutas.put("/editarProducto/:id", async (req, res) => {
    const productoActualizado = await editarProd(req.params.id, req.body);
    res.json(productoActualizado);
});
rutas.delete("/borrarProducto/:id", async (req, res) => {
    const productoBorrado = await deleteProd(req.params.id);
    res.json(productoBorrado);
});




module.exports = rutas;
