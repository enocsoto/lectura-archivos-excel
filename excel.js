const XLSX = require('xlsx');

// Ruta del archivo Excel a leer
const rutaArchivo = './tabla.xlsx';

// Carga el archivo Excel
const libro = XLSX.readFile(rutaArchivo);

// Obtiene el nombre de todas las hojas en el libro
const nombresHojas = libro.SheetNames;

// Lee y procesa cada hoja del libro
const datosHojas = nombresHojas.map(nombreHoja => {
  // Obtiene la hoja actual
  const hoja = libro.Sheets[nombreHoja];

  // Convierte la hoja a un objeto JSON
  const datos = XLSX.utils.sheet_to_json(hoja);

  // Devuelve los datos de la hoja actual
  return { hoja: nombreHoja, datos };
});

// Imprime los datos de cada hoja
datosHojas.map(datosHoja => {
  console.log(`Datos de la hoja "${datosHoja.hoja}":`, datosHoja.datos);
});
