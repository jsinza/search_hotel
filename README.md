
# Buscador de hoteles.
Es una aplicación web responsive permite realizar la búsqueda de hoteles por nombre y números de estrellas.

Para su construcción se utilizaron las siguientes tecnologías 
* [Node.js](https://nodejs.org/en/)
* [Angular](https://angular.io/)
* [MongoDB](https://www.mongodb.com)
* [Express](https://expressjs.com/)
* [Docker](http://docker.com)

Donde el desarrollo del restfull Api se utilizo node js con el framework express , el almacenamiento de información en una base nosql (mongoDb)y aplicación web en el framework  angular.

Para su despliegue la aplicación se manejo mediante contenedores utilizando docker.
## Prerequisitos de instalación

* [Docker CE](http://docker.com)
* [Git](https://git-scm.com/downloads)

## Instalación
Para iniciar la aplicación buscador de hoteles, necesita clonar el repositorio que se encuentra github. Este repositorio contiene todos el código fuente de la aplicación. Seguir los siguientes para ejecutar aplicación
```
git clone https://github.com/jsinza/search-hotel.git  
cd search-hotel
docker-compose build  
docker-compose up  
```
Si los anteriores comandos se ejecutaron de manera correcta y sin errores podrás ingresar a la siguiente url  http://localhost para comenzar a utilizar.

## Recursos Api RestFull 
url de api  :  http://localhost:3000

 * GET /Hotels

 Datos de salida
 
 ```json
[
    {
        "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
        ],
        "_id": "5a8726ad4c1e1b00164d24c5",
        "id": 249942,
        "name": "Hotel Stefanos",
        "stars": 3,
        "price": 994.18,
        "image": "4900059_30_b.jpg",
        "__v": 0
    }
]
 ```
 * POST /users

Datos de entrada
 ```json
{
        "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
        ],
        "id": 258964,
        "name": "Hotel Stefanos 2",
        "stars": 3,
        "price": 1000.18,
        "__v": 0
 }
 ```
 Datos de salida.
 ```json
 {
        "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
        ],
        "_id": "5a872f47890af30010623533",
        "id": 258964,
        "name": "Hotel Stefanos 2",
        "stars": 3,
        "price": 1000.18,
        "__v": 0
 }
 ```
 * GET /hotels/:id

 ```json
 {
    "amenities": [
        "nightclub",
        "business-center",
        "bathtub",
        "newspaper",
        "restaurant"
    ],
    "_id": "5a8726ad4c1e1b00164d24c6",
    "id": 161901,
    "name": "Hotel Santa Cruz",
    "stars": 3,
    "price": 1267.57,
    "image": "6623490_6_b.jpg",
    "__v": 0
}
 ```
 * PUT /hotels/:id

Datos de entrada
 ```json
{
        "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
        ],
        "id": 258964,
        "name": "Hotel Stefanos 2",
        "stars": 3,
        "price": 1000.18,
        "__v": 0
 }
 ```
 Datos de salida.
 ```json
 {
        "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
        ],
        "_id": "5a872f47890af30010623533",
        "id": 258964,
        "name": "Hotel Stefanos 2",
        "stars": 3,
        "price": 1000.18,
        "__v": 0
 }
 ```
 * DELETE /users/:id
 
  Datos de salida.
 ```json
 {
   "status": true
 }
 ```