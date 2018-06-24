const Joi = require('joi');

module.exports = {
    validateGetPlaylist: (req, res, next) => {
        Joi.validate({params: req.params}, {
            params: {
                userId: Joi.string().length(24).required()
            }
        }, (err) => {
            if (err) {
                res.status(400).json({name: err.name, message: err.details[0].message})
            }
            next()
        })
    },

    validateAddPlaylist: (req, res, next) => {
        Joi.validate({body: req.body}, {
            body: {
                type: Joi.required(),
                default: Joi.required(),
                enum: Joi.required()
            }
        }, (err) => {
            if (err) {
                res.status(400).json({name: err.name, message: err.details[0].message})
            }
            next()
        })
    },

    validateRemovePlaylist: (req, res, next) => {
        Joi.validate({body: req.body}, {
            body: {
                userId: Joi.string().required().length(24)
            }
        }, (err) => {
            if (err) {
                res.status(400).json({name: err.name, messege: err.details[0].message})
            }
            next()
        })
    }
};