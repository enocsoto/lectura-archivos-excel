const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const { Product } = require("./model/product");

const app = express();

// Configuración de multer para almacenar los archivos subidos en memoria como streams
const storage = multer.memoryStorage();

const upload = multer({ storage });

// Endpoint para subir y convertir el archivo de Excel a JSON
app.post("/upload-excel", upload.single("excelFile"), (req, res) => {
  try {
    // Obtener el buffer del archivo subido
    const buffer = req.file.buffer;

    // Leer el archivo de Excel desde el buffer
    const workbook = xlsx.read(buffer, { type: "buffer" });

    const dataSet = [];
    for (const key in workbook.Sheets) {
      if (Object.hasOwnProperty.call(workbook.Sheets, key)) {
        const element = workbook.Sheets[key];
        dataSet.push({
          name_sheet: key,
          data: xlsx.utils.sheet_to_json(element),
        });
      }
    }
    const resultados = dataSet.map((item) => {
      return item.data.map((datos) => {
        const producto = new Product();
        producto.setThisByTable(datos);
        return producto;
      });
    });
    // Enviar el JSON como respuesta
    return res.json(resultados);

    res.status(404).json({ error: true, message: "Tipo no soportado" });

    // Obtener el nombre de la primera hoja de cálculo
  } catch (error) {
    // Manejar cualquier error
    console.error(error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al leer el archivo de Excel." });
  }
});

// Iniciar el servidor
app.listen(300, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
