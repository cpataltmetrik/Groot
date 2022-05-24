let dbName = require("mysql2");
let dbConnection = require("../../src/main/utilities/db");
const ASSERT_CHAI = require("chai").assert;
let result;

describe("connecting to MySql db", () => {
  it("should verify the new connection to db", async () => {
    let getConnection = dbName.createConnection(dbConnection.mysqlLocal)
    let query = "select name from sys.users";
    getConnection.connect((err)=>{
      if(err) {
        console.log("Error occurred", err);
      }else {
        console.log("Connected to database");
        console.log("Query posted is : " + query)
        getConnection.query(query, function (err,results) {
          if(err){
            console.log("Error: "+ err)
          } else {
          
          console.log("results from DB are: "+JSON.stringify(results));
          results.forEach(function (value){
          result = JSON.parse(JSON.stringify(value));
          console.log(result.name)
          })
        }
        })
      }
  })
    
    });
  });

