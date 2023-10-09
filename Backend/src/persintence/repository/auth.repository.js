import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

// Importa la clave secreta JWT desde el archivo .env
const JWT_SECRET = process.env.JWT_SECRET || "tu-secreto-secreto";

// Buscar un usuario por su correo electrónico
export async function findUserByEmail(mail) {
  try {
    const user = await User.findOne({ where: { mail: mail } });
    return user;
  } catch (error) {
    throw new Error("Sucedio un error al buscar al usuario por correo electrónico.");
  }
}

// Verificar la contraseña del usuario
export async function verifyPassword(user, password) {
  try {
    if (!user) {
      return false; // El usuario no existe
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    return passwordMatch;
  } catch (error) {
    throw new Error("Sucedio un error al verificar la contraseña.");
  }
}

// Generar un token de sesión utilizando la clave secreta JWT
export function generateAuthToken(userId) {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "1h", // Establece la expiración del token
  });
  return token;
}
