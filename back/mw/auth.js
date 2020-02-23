const config = require('../utils/config');
const options = config.DB_OPTIONS;
const knex = require('knex')(options);
const jwt = require('jsonwebtoken');

const getTokenFrom = req => {
    const authorization = req.get(`authorization`)

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        return authorization.substring(7)
    }
    return null
}

const isAuthenticated = (req, res, next) => {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, config.SECRET);

    if (!token) {
        return res.status(401).json({ error: 'token missing' })
    }
    
    if (!decodedToken || !decodedToken.uid) {
        return res.status(401).json({ error: "token invalid" })
    }

    knex.from('users').first('*')
        .where('uid', '=', decodedToken.uid)
        .then((user) => {
            if (user.lenght === 0) {
                return res.status(401).json({ error: "Token invalid" })
            }
            res.locals.auth = { uid: decodedToken.uid, usern: decodedToken.usern };
            next();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'database error' })
        })
}

module.exports = isAuthenticated