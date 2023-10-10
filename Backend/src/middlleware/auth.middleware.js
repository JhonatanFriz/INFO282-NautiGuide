import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config"; // Asegúrate de tener tu clave secreta JWT en un archivo de configuración

export function authenticate(req, res, next) {
  // Obtiene el token de autorización del encabezado
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token de autorización no proporcionado" });
  }

  // Verifica el token JWT
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token no válido" });
    }

    // Si el token es válido, puedes almacenar la información del usuario en el objeto de solicitud (req) para su uso posterior
    req.user = decoded;

    // Continúa con la solicitud
    next();
  });
}
