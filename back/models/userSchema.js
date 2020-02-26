const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    usern: Joi.string().required().min(5).max(10),
    psw: Joi.string().required().min(5).max(16)
});

module.exports = schema;