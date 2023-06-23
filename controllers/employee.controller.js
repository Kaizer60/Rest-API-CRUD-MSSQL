const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const service = require("../services/employeeService");

//READ ALL
router.get("/", (req, res) => {
  try {
    sql.query(service.getAll(), (err, result) => {
      //   if (err) {
      //     return res.status(400).json({ error: err.message });
      //   } else {
      //     return res.status(200).json(result.recordset);
      //   }
      return err
        ? res.status(400).json({ error: err.message })
        : res.status(200).json(result.recordset);
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//READ BY ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  //const getById = `SELECT * FROM employees WHERE id = ${id}`;
  try {
    sql.query(service.getById(id), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res.status(200).json(result.recordset);
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//CREATE
router.post("/", (req, res) => {
  const { fullname, email } = req.body;
  try {
    sql.query(service.createEmployee(fullname, email), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res
            .status(201)
            .json({ mesasage: "New employee successfully created!" });
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { fullname, email } = req.body;
  try {
    sql.query(service.updateEmployee(fullname, email, id), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res
            .status(200)
            .json({ mesasage: "Data employee succesfully updated!" });
    });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
});

//DELETE ALL
router.delete("/", (req, res) => {
  try {
    sql.query(service.deleteAll(), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res
            .status(200)
            .json({ mesasage: "All data employee succesfully deleted!" });
    });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
});

//DELETE BY ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    sql.query(service.deleteEmployee(id), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res
            .status(200)
            .json({ mesasage: "Data employee succesfully deleted!" });
    });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
