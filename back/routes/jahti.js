var express = require("express");
var router = express.Router();
const config = require("../utils/config");
const options = config.DB_OPTIONS;
const knex = require("knex")(options);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", (req, res, next) => {
  bcrypt
    .hash(req.body.psw, 15)
    .then(passwordHash => {
      const userReg = {
        usern: req.body.usern,
        psw: passwordHash
      };

      knex("users")
        .insert(userReg)
        .then(e => {
          res.status(204).end();
        })
        .catch(err => {
          console.log(err);
          res.status(409).json({ error: "Username already exists." });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error in hashing password." });
    });
});

router.post("/login", (req, res, next) => {
  const body = req.body;

  knex
    .first("*")
    .from("users")
    .where("usern", "=", req.body.usern)
    .then(user => {
      if (user.length === 0) {
        return res.status(401).json({ err: "Invalid username or password." });
      }

      bcrypt.compare(req.body.psw, user.psw).then(passwordCorrect => {
        if (!passwordCorrect) {
          return res.status(401).json({ err: "Invalid username or password." });
        }
        const userForToken = {
          uid: user.uid,
          usern: user.usern
        };
        const token = jwt.sign(userForToken, config.SECRET);

        res.status(200).send({
          username: user.usern,
          points: user.points,
          token
        });
        next();
      }).catch(err => {
        console.log(err);
        res.status(500).json({ err: "Server error in login." });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: "Database error in login." });
    });
});

module.exports = router;