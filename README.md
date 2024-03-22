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

VITE_APP_HOST=localhost
VITE_APP_PORT=4003



VITE_BACKEND_URL = "http://localhost:5004"

```

Crear archivo .env en Backend:
```
DB_NAME = "test"

# DB 
DB_USER = "root"
DB_PASSWORD = "pf$6#iAEQ#@y7vMnXiTXLLC#wiEHcn"
DB_HOST = "localhost"
DB_DRIVER = "mysql"
DB_PORT = "3306"


JWT_SECRET=tu-secreto-secreto
# configuración cors 
ORIGIN = "http://localhost:4003"




# configuración server 
IP = "localhost"
PORT = 5004
```
Ejecutar Xampp y activar apache y MySql

En phpmyadmin crear el usuario que se asignó en el .env

Crear DB "test"

En carpetas Backend y Frontend ejecutar
```
npm run dev
```
