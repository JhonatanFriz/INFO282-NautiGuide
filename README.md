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
Para desplegar utilizando docker, pasar al punto 2

1. Crear archivo .env en Frontend:
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
Ejecutar en las carpetas Frontend y Backend
```
npm install
```
Ejecutar Xampp y activar apache y MySql

En phpmyadmin crear el usuario que se asignó en el .env

Crear DB "test"

En carpetas Backend y Frontend ejecutar
```
npm run dev
```
2. Desplegar con Docker
Crear archivo .env en Frontend:
```
VITE_APP_HOST=0.0.0.0
VITE_APP_PORT=4003
VITE_BACKEND_URL = "http://0.0.0.0:5004"

```

Crear archivo .env en Backend:
```
DB_NAME = "test"
# DB
DB_USER = "root1"
DB_PASSWORD = "asdfghj" 
DB_HOST = "db_test"
DB_DRIVER = "mysql"
DB_PORT = "3306"

# configuración cors 
ORIGIN = "http://0.0.0.0:4003"

# configuración server 
IP = "0.0.0.0"
PORT = 5004
```

En la carpeta raíz del proyecto ejecutar
```
docker-compose up --build
```
A fin de evitar que se ejecute la primera consulta a la base de datos, se agregó un timeout de 120 segundos.

   
   
