const XLSX = require('xlsx');

class ExcelReader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readAllSheets() {
    const workbook = XLSX.readFile(this.filePath);
    const sheetNames = workbook.SheetNames;

    const sheetData = sheetNames.map(sheetName => {
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      return { sheetName, data };
    });

    return sheetData;
  }
}

// Uso de la clase ExcelReader
const filePath = './tabla.xlsx';
const excelReader = new ExcelReader(filePath);
const sheetsData = excelReader.readAllSheets();

sheetsData.map(sheetData => {
  console.log(`Datos de la hoja "${sheetData.sheetName}":`, sheetData.data);
});
