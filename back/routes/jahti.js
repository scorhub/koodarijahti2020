var express = require("express");
var router = express.Router();
const config = require("../utils/config");
const options = config.DB_OPTIONS;
const knex = require("knex")(options);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const isAuthenticated = require('../mw/auth');

router.get("/", isAuthenticated, function(req, res, next) {
  knex.first("*").from('users')
  .where('uid', '=', res.locals.auth.uid)
  .then((user) => {
      if (user.lenght === 0) {
          return res.status(400).json({ error: "User not found." })
      }
      res.status(200).send({
        username: user.usern,
        points: user.points
      });

  })
  .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'database error' })
  })
});

router.post("/", isAuthenticated, function(req, res, next) {
  if(req.body.points <= 0){
    const zeroPoints = { points: 0}
    res.status(200).json(zeroPoints);
  } else {
    if(res.locals.auth.points > 0) {
      knex('users')
      .where('uid', '=', res.locals.auth.uid)
      .decrement('points')
      .then(abc => {
        knex('calculator')
        .increment('clicks')
        .where('pid', '=', 1)
        .then(def => {
          knex.first('*').from('calculator')
          .where('pid', '=', 1)
          .then(number => {
            if(Number.isInteger(number.clicks / 500)){
              let win500 = res.locals.auth.points +249;
              let won250 = { points: win500 }
              knex('users')
              .where('uid', '=', res.locals.auth.uid)
              .update(won250)
              .then(result => {
                const wonMsg250 = { ...won250, won: 250}
                res.status(200).json(wonMsg250)
              })
            } else if (Number.isInteger(number.clicks / 100)){
              let win100 = res.locals.auth.points +39;
              let won40 = { points: win100 }
              knex('users')
              .where('uid', '=', res.locals.auth.uid)
              .update(won40)
              .then(result => {
                const wonMsg40 = { ...won40, won: 40}
                res.status(200).json(wonMsg40)
              })
            } else if (Number.isInteger(number.clicks / 10)){
              let win10 = res.locals.auth.points +4;
              let won5 = { points: win10 }
              knex('users')
              .where('uid', '=', res.locals.auth.uid)
              .update(won5)
              .then(result => {
                const wonMsg5 = { ...won5, won: 5}
                res.status(200).json(wonMsg5)
              })
            } else {
              const tempPoints = res.locals.auth.points -1;
              const pointsNow = { points: tempPoints, won: 0 }
              res.status(200).json(pointsNow);
            }
          })
        })
      })
    } else {
      const zeroPoints = { points: 0}
      res.status(200).json(zeroPoints);
    }
}});

router.patch("/reset", isAuthenticated, (req, res, next) => {
  if(req.body.points <= 0){
  knex('users')
  .where('uid', '=', res.locals.auth.uid)
  .update({ points: 20 })
    .then(e => {
      res.status(204).end();
    })
    .catch(err => {
      console.log(err);
      res.status(403).json({ error: "Forbidden." });
    });
  } else {
    res.status(400).json({ error: "Bad Request." });
  }
});

router.post("/register", (req, res, next) => {
  bcrypt
    .hash(req.body.psw, 10)
    .then(passwordHash => {
      const userReg = {
        usern: req.body.usern,
        psw: passwordHash,
        points: 20
      };

      knex("users")
        .insert(userReg)
        .then(e => {
          res.status(201).end();
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