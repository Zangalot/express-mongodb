## Express, MongoDB, Mongoose, Typescript
Aplicación CRUD con Express.js usando MVC.
Siguiendo el tutorial de [wanago](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/).

#
## Requisitos
Tener instalado [node.js](https://nodejs.org/es/download/).

Una cuenta en [mongoDB](https://www.mongodb.com/) o [mdLab](https://mlab.com/).
#
## Iniciar el proyecto
Para iniciar el proyecto necesitaremos crear un fichero ``.env`` en la raiz del mismo e incluir nuestras variables de configuración:
```
MONGO_USER=<usuario de nuestra mongoDB>
MONGO_PASSWORD=<contraseña de nuestra mongoDB>
MONGO_PATH=<dirección de nuestra mongoDB>
PORT=<puerto donde se ejecutará nuestra aplicación>
```

Abrir una consola desde la raiz de nuestro proyecto e instalar las dependencias ejecutando el comando:
```
npm install
```

Y ejecutar nuestra aplicación con el script:
```
npm run dev
```
#
## Modelos
- Address Model
```
  interface Address {
    city: string;
    street: string;
  }
```
- Post Model
```
  interface Post {
    authors: Array<Object>;
    content: string;
    title: string;
  }
```
- User Model
```
  interface User {
    _id: number;
    name: string;
    email: string;
    password: string;
    address: Address;
    posts: Array<object>;
  }
```

#
## Recursos
https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/

https://mlab.com/
