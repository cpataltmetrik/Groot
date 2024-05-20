const db = require("mysql2/promise");
const dbHost = require("../../../src/main/utilities/db");

class DBConnection {
    public async executeQueryOnMySql(query: string): Promise<object[]> {
        //const connection = this.connectToMySqlDB();
        const connection = await db.createConnection(dbHost.mysqlLocal);
        console.log("Query posted is : " + query);
        const [rows, fields] = await connection.execute(query)
        return rows;
    }

    public async connectToMySqlDB(): Promise<any> {
        const connection = await db.createConnection(dbHost.mysqlLocal);
        connection.connect((err) => {
            if (err) {
                console.log("Error occurred", err);
            } else {
                console.log("Connected to database");
            }
        });
        return connection;
    }
}
export default new DBConnection();