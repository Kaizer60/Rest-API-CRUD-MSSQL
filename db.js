const sql = require("mssql/msnodesqlv8");

const config = {
  server: "your_server_name",
  database: "database_name",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

module.exports = () => {
  return sql.connect(config);
};
