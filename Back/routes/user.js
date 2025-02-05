require("dotenv").config();
const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM utilisateur";
  db.query(sql, (err, result) => {
    if (err) {
      return result.status(500).send(err);
    }
    res.status(200).json(result);
  });
});

router.post("/register", (req, res) => {
  const { nom, prenom, adressmail, password } = req.body;
  const sql =
    "INSERT INTO  utilisateur  (nom,prenom,adressmail,password)  VALUES (?,?,?,?)";
  db.query(sql, [nom, prenom, adressmail, password], (err, result) => {
    if (err) {
      return result.status(501).send(err);
    }
    res.status(200).json({ message: "ok" });
  });
});

module.exports = router;
