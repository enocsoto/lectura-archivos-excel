Aquí tienes un ejemplo de un archivo README.md para GitHub con el código proporcionado:

```markdown
# Convertir archivo Excel a JSON con Express.js

Este repositorio contiene un ejemplo de código en Express.js que permite subir un archivo de Excel, leerlo y convertirlo a JSON.

## Requisitos previos

- Node.js instalado en tu entorno de desarrollo.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/convertir-excel-a-json.git
```

2. Navega hasta el directorio del proyecto:

```bash
cd convertir-excel-a-json
```

3. Instala las dependencias utilizando npm:

```bash
npm install
```

## Uso

1. Inicia el servidor ejecutando el siguiente comando:

```bash
node index.js
```

2. Abre tu navegador y accede a `http://localhost:3000`.

3. Utiliza la ruta `/upload-excel` para subir un archivo de Excel. Asegúrate de que el archivo a subir tenga el campo `excelFile`.

4. El servidor leerá el archivo de Excel y devolverá los datos convertidos a JSON.

## Contribuir

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork de este repositorio.

2. Crea una rama para tu nueva funcionalidad:

```bash
git checkout -b nueva-funcionalidad
```

3. Realiza los cambios necesarios y realiza commits con mensajes descriptivos:

```bash
git commit -m "Agrega nueva funcionalidad"
```

4. Sube tus cambios a tu repositorio fork:

```bash
git push origin nueva-funcionalidad
```

5. Abre un Pull Request en este repositorio y describe los cambios que has realizado.
