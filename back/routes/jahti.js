var express = require("express");
var router = express.Router();
const config = require("../utils/config");
const options = config.DB_OPTIONS;
const knex = require("knex")(options);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const isAuthenticated = require('../mw/auth');

router.get("/", isAuthenticated, function(req, res, next) {
  console.log(res.locals)
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
  console.log('reslocalsuathuid post / ', res.locals.auth.uid)
  knex.first("*").from('users')
  .where('uid', '=', res.locals.auth.uid)
  .then(user => {
    if(user.points > 0) {
      console.log('morepoints than 0')
      knex('users')
      .where('uid', '=', user.uid)
      .decrement('points')
      .then(abc => {
        knex('calculator')
        .increment('clicks')
        .where('pid', '=', 1)
        .then(def => {
          knex.first('*').from('calculator')
          .where('pid', '=', 1)
          .then(number => {
            console.log('number.clicks: ', number.clicks)
            // const jaa5lla = number.clicks / 5;
            // console.log('jaaviidella ', Number.isInteger(jaa5lla));
            // console.log('jaaviidella');
            // console.log('jaaviidella ', (number.clicks / 5));
            if(Number.isInteger(number.clicks / 500)){
              let win500 = user.points +249;
              let won250 = { points: win500 }
              knex('users')
              .where('uid', '=', user.uid)
              .update(won250)
              console.log('won 250 points')
            } else if (Number.isInteger(number.clicks / 100)){
              let win100 = user.points +39;
              let won40 = { points: win100 }
              knex('users')
              .where('uid', '=', user.uid)
              .update(won40)
              console.log('won 40 points')
            } else if (Number.isInteger(number.clicks / 10)){
              let win10 = user.points +4;
              let won5 = { points: win10 }
              console.log('won 5 points')
              knex('users')
              .where('uid', '=', user.uid)
              .update(won5)
            }
          })

          // const pointsNow = user.points -1;
          // console.log('pojotnyt ', pointsNow)
          // res.status(200).json(pointsNow);
        })
      })
    } else {
    console.log('nopoints')
    }
  })
  .catch((err) => {
      console.log(err);
      res.status(400).json({ error: 'User not found.' })
  })
});

router.post("/register", (req, res, next) => {
  bcrypt
    .hash(req.body.psw, 15)
    .then(passwordHash => {
      const userReg = {
        usern: req.body.usern,
        psw: passwordHash,
        points: 20
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