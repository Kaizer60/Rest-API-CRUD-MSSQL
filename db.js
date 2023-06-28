const sql = require("mssql/msnodesqlv8");

const config = {
  server: "DESKTOP-GJR1GG8\\SQLEXPRESS",
  database: "employee",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

module.exports = () => {
  return sql.connect(config);
};
