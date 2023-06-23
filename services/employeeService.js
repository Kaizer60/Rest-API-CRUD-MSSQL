const getAll = () => {
  return `SELECT * FROM employees`;
};

const getById = (id) => {
  return `SELECT * FROM employees WHERE id = ${id}`;
};

const createEmployee = (fullname, email) => {
  return `INSERT INTO employees(fullname,email) VALUES ('${fullname}','${email}')`;
};

const updateEmployee = (fullname, email, id) => {
  return `UPDATE employees SET fullname = '${fullname}', email = '${email}' WHERE id = ${id}`;
};

const deleteEmployee = (id) => {
  return `DELETE employees WHERE id = ${id}`;
};

const deleteAll = () => {
  return `DELETE FROM employees`;
};

module.exports = {
  getAll,
  getById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  deleteAll,
};
