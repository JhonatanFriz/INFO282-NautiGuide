# INFO282-NautiGuide

Integrantes:
  - Jhonatan Friz
  - José Manuel Godoy
  - Yoan Salom

# Manual de despliegue local

Acceso a la aplicación
Tener instalado:
* Node.js
* Xampp
* Visual Studio

Traer repositorio de github con:
```
git clone https://github.com/JhonatanFriz/INFO282-NautiGuide.git
```
Ejecutar en las carpetas Frontend y Backend
```
npm install
```

Crear archivo .env en Frontend:
```
DB_NAME = "test"
# DB
DB_USER = "Nombre"
DB_PASSWORD = "Contraseña" 
DB_HOST = "localhost"
DB_DRIVER = "mysql"

# configuración cors 
ORIGIN = "http://localhost:3000"

# configuración server 
IP = "localhost"
PORT = 4000
```

Crear archivo .env en Backend:
```
VITE_APP_HOST=localhost
VITE_APP_PORT=4003
VITE_BACKEND_URL = "http://localhost:5004"
```
Abrir Xampp y activar apache y MySql

En phpmyadmin crear el usuario que se asignó en el .env

Crear DB "test"

En carpetas Backend y Frontend ejecutar
```
npm run dev
```
