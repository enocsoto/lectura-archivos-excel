# Módulo de Inserción de Productos en MongoDB desde una Plantilla Excel

Este repositorio contiene un módulo desarrollado en Express.js y Node.js que permite insertar productos en una base de datos MongoDB a partir de una plantilla Excel. El objetivo es simplificar el proceso de carga masiva de datos en la base de datos utilizando una interfaz amigable y una plantilla estructurada.

## Tecnologías Utilizadas

- Express.js: Framework de desarrollo web para Node.js que proporciona una estructura sólida y flexible para construir aplicaciones web.
- Node.js: Entorno de tiempo de ejecución de JavaScript basado en el motor V8 de Google Chrome, que permite ejecutar JavaScript en el lado del servidor.
- JavaScript: Lenguaje de programación utilizado tanto en el frontend como en el backend para agregar funcionalidad a las aplicaciones web.

## Funcionalidades

- Carga de Plantilla Excel: El módulo permite al usuario cargar una plantilla Excel predefinida que contiene los datos de los productos a ser insertados en la base de datos.
- Validación de Datos: Antes de la inserción en la base de datos, se realiza una validación de los datos de la plantilla Excel para garantizar su integridad y consistencia.
- Inserción en MongoDB: Los datos válidos se insertan en la base de datos MongoDB utilizando el controlador de MongoDB para Node.js.

## Uso

1. Clona el repositorio en tu máquina local: `git clone https://github.com/tu-usuario/nombre-repositorio.git`.
2. Instala las dependencias necesarias: `npm install`.
3. Configura la conexión a la base de datos MongoDB en el archivo `config.js`.
4. Crea una plantilla Excel siguiendo el formato especificado en la documentación.
5. Ejecuta la aplicación: `node app.js`.
6. Accede a la interfaz web en tu navegador: `http://localhost:3000`.
7. Carga la plantilla Excel utilizando el formulario proporcionado.
8. Revisa los mensajes de validación y confirmación de inserción en la base de datos.
9. ¡Los productos se han insertado correctamente en MongoDB!

## Contribuciones

Las contribuciones son bienvenidas y agradecidas. Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza tus cambios y realiza commits descriptivos.
4. Sube tus cambios a tu repositorio remoto: `git push origin nueva-funcionalidad`.
5. Abre un pull request en el repositorio original.

## Autor

Este módulo fue desarrollado por Francisco Jiménez.

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).

## Metodo de Pago

$ 12Usd / Hora con los paramentros actuales , se determinan aprox 8 horas de trabajo.

https://files.escaparate.com.ar/prod/_86212284_14763204774_6f2cc28b59_o.jpg

##Excel campos:

Name -> Comentario
Description -> Descripción
Brand -> Marca
Model -> Modelo
Price_type -> Precio
Product_condition -> condición de poducto (nuevo o usado)
Photos -> Imágenes
Variante_types -> Variantes
Stock -> Stock
Warranty -> Garantia
Sku -> Sku
bar_code -> codigo universal
Shipping:
length -> peso
width -> largo
height -> altura
weight -> ancho
