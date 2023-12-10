import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../persintence/models/User.js";


// Importa la clave secreta JWT desde el archivo .env
const JWT_SECRET = process.env.JWT_SECRET || "tu-secreto-secreto";

// Controlador para el inicio de sesión
export async function login(req, res) {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ where: { mail } });

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const role = user.rol || 'USUARIO';

    // Genera un token de sesión utilizando la clave secreta JWT
    const token = jwt.sign({ userId: user.id, role }, JWT_SECRET, {
      expiresIn: "1h", // Establece la expiración del token
    });

    // Devuelve el token al cliente
    res.status(200).json({ token, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
}

const invalidatedTokens = new Set();

// Controlador para el cierre de sesión
export function logout(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "Token de autorización no proporcionado" });
    }
    if (invalidatedTokens.has(token)) {
      return res.status(401).json({ message: "El token ya ha sido invalidado" });
    }

    // Invalida el token agregándolo a la lista negra
    invalidatedTokens.add(token);

    res.status(200).json({ message: "Sesión cerrada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
}