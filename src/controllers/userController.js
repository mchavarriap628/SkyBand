const User = require("../models/User");
const bcrypt = require("bcryptjs");

// CREAR USUARIO - PASSWORD HASHEADO
exports.createUser = async (req, res) => {
  try {
    //const user = await User.create(req.body);
    //res.status(201).json(user);

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);


  } catch (error) {
    res.status(500).json({ message: "Error creando usuario" });
  }
};

// VER TODOS LOS USUARIOS
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// VER UN USUARIO POR ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ACTUALIZAR UN USUARIO POR ID
exports.updateUser = async (req, res) => {
  try {

    const updateData = { ...req.body };
    //Si viene password, lo encriptamos
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// BORRAR UN USER POR ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};