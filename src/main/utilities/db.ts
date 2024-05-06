//oracle database config
exports.oracle = {
    libpath: __dirname+'/drivers/oracle/ojdbc7.jar',
    drivername: 'oracle.jdbc.driver.OracleDriver',
    url:  'jdbc:oracle:thin:QA/password123@//abc-test.corp.int:1527/stage1S',
    // uri: 'jdbc:oracle:thin://abc-test.corp.int:1527/stage1S',
    // user: 'QA',
    // password: 'password123',
  };
  
  //mysql database config
  exports.mysql = {
    libpath: __dirname+'/drivers/mysql/mysql-connector-java-5.0.8-bin.jar',
    drivername: 'com.mysql.jdbc.Driver',
    uri: 'jdbc:mysql://localhost:3306/sys',
    user: 'root',
    password: 'password'
  };
  
  exports.mysqlLocal = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "sys",
  };