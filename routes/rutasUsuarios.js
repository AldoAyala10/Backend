var rutas = require("express").Router();
var { mostrarUsuarios, busXId, deleteUser, newUser, editUser } = require("../bd/usuarioBD");

rutas.get("/", async (req, res) => {
    var usuariosValidos = await mostrarUsuarios();
    res.json(usuariosValidos);
});

rutas.post("/nuevoUsuario", async (req, res) => {
    var usuarioValido = await newUser(req.body);
    res.json(usuarioValido);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    var usuarioValido = await busXId(req.params.id);
    res.json(usuarioValido);
});

rutas.delete("/borrarUsuario/:id", async (req, res) => {
    var usuarioBorrado = await deleteUser(req.params.id);
    res.json(usuarioBorrado);
});


rutas.put("/editarUsuario/:id", async (req, res) => {
    var usuarioEditado = await editUser(req.params.id, req.body);
    res.json(usuarioEditado);
});

module.exports = rutas;
