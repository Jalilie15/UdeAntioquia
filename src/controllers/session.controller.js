const User = require('../models/user.js');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: 'Usuario creado con exito',
      savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: 'Algo salió mal'
    });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });
    const { role, name } = user;
    const payload = {
      id: user._id,
      role,
      name,
    }
    return res.status(200).json({
      message: 'Inicio de sesión exitosa',
      user: payload,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Algo salió mal',
      stack: error.stack.split('\n'),
    });

  }
}

module.exports = {
  signup,
  login,
}