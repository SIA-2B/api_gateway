# ApiGateway
## Despliegue
1. Crear la imagen del api gateway en docker - `docker build -t api_gateway_image .`
2. Correr la imagen anteriormente creada en un contenedor - `docker run -p 5000:5000 --name api_gateway_container api_gateway_image`
