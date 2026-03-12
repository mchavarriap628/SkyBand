Con este comando se inicia un proyecto en Node.js (node debe estar previamente instalado).
npm init -y

Con este comando se instalan los modulos o librerías que vamos a utilizar para hacer el API.

npm install express mongoose dotenv cors
npm install --save-dev nodemon

express -> este modulo es para crear el servidor local que va a ejecutar todo el codigo.
mongoose -> este modulo sirve para conectarlos con MongoDB y poder implementar las consultas.
dotenv -> este sirve para usar variables de entorno y no subir datos sensibles del proyecto a github.
cors -> este modulo es para que nuestro servidor no bloquee las solicitudes que no provegan del mismo localhost.
nodemon -> este sirve para crear un server persistente con express.

---------------------------------------------------------------------------------------------------------------------

Por cuestión de orden vamos a utilizar la siguiente estructura de carpetas

/proyecto
│
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

---------------------------------------------------------------------------------------------------------------------

Usamos gitignore para no subir los siguienes archivos:
.env
MongoDB-cred.txt

---------------------------------------------------------------------------------------------------------------------

Creamos la aplicación app.js y el server server.js, tambipen db.js que va a ser el archivo de connexión con Mongo DB.

Con este comando podemos ejecutar el server: 
npm run dev

---------------------------------------------------------------------------------------------------------------------

-> Agregar usuarios en postman

POST http://localhost:5000/api/users

{
  "name": "Manuel",
  "email": "manuel@email.com",
  "password": "123456"
}

-> Ver usuarios en postman

GET http://localhost:5000/api/users

-> Borrar usuario en postman por ID

DELETE http://localhost:5000/api/users/699f5fee3fa02b13a62a2d59 (se debe cambiar el ID)

-> actualizar usuarios en postman por ID

PUT http://localhost:5000/api/users/699f61bf3fa02b13a62a2d5e (se debe cambiar el ID)

{
  "name": "informacion nueva",
  "email": "email-actualizado@email.com",
  "password": "123456"
}