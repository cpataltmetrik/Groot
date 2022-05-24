const excelToJson = require('convert-excel-to-json');
const csvToJson = require('convert-csv-to-json')
import xlsx from 'node-xlsx';
const fs = require("fs");
const parser = require("papaparse");

export default class dataConverter  {
     public static exceltoJsonDataConverter(filePath: String) {
        const result = excelToJson({
            sourceFile: filePath,
            columnToKey: {
                '*': '{{columnHeader}}'
            },
            header: {
                rows: 1
            }

        });
        return result;
    }
    public static excelDataConverter(filePath: String, sheetName: String) {
        const excelFile = xlsx.parse(filePath);
        const excelSheet = excelFile.find(sheets => sheets.name == sheetName);
        let excelSheetData = excelSheet.data;
        const headers = excelSheetData.shift();
        const loginExcelTestData = excelSheetData.map((row: Array<any>) => {
            const user = {}
            row.forEach((data, idx) => user[headers[idx]] = data);
            return user;
        });
        return loginExcelTestData;
    }
    public static csvDataConverter(filePath: String){
        const csvFile = fs.readFileSync(filePath, { encoding: "utf8" });
        const csvData = parser.parse(csvFile, { header: true });
        return csvData.data;
    }
    public static csvToJsonConverter(filePath: String) {
        let json = csvToJson.fieldDelimiter(',').parseSubArray('*',';').getJsonFromCsv(filePath);
        return json;    
    }
}
