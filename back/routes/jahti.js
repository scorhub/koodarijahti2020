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
          res.status(500).json({ error: "Database error in register." });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Database error in hashing password." });
    });
});

// router.post("/login", (req, res, next) => {
//   const body = req.body;

//   knex
//     .from("users")
//     .select("*")
//     .where("usern", "=", body.usern)
//     .then(user => {
//       if (user.length === 0) {
//         return res.status(401).json({ err: "Invalid username or password" });
//       }

//       const tempUser = user[0];
//       bcrypt.compare(body.psw, tempUser.psw).then(passwordCorrect => {
//         if (!passwordCorrect) {
//           console.log("salasana väärin");
//           return res.status(401).json({ err: "Invalid username or password" });
//         }
//         console.log("salasana oikein");
//         const userForToken = {
//           usern: tempUser.usern,
//           uid: tempUser.uid,
//           name: tempUser.showname
//         };
//         const token = jwt.sign(userForToken, config.SECRET);

//         console.log("token", token);

//         res
//           .status(200)
//           .send({
//             username: tempUser.usern,
//             name: tempUser.showname,
//             accesslevel: "pogo",
//             token
//           });

//         next();
//       });
//     })
//     .catch(err => {
//       console.log(err);

//       res.status(500).json({ err: "database error in login" });
//     });
// });

module.exports = router;
