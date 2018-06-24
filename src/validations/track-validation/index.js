const Joi = require('joi');

module.exports = {
    validateGetTrack: (req, res, next) => {
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

    validateAddTrack: (req, res, next) => {
        Joi.validate({body: req.body}, {
            body: {
                Author: Joi.string().required(),
                Name: Joi.string().required(),
                Duration: Joi.string().required()
            }
        }, (err) => {
            if (err) {
                res.status(400).json({name: err.name, message: err.details[0].message})
            }
            next()
        })
    },

    validateRemoveTrack: (req, res, next) => {
        Joi.validate({body: req.body}, {
            body: {
                trackId: Joi.string().required().length(24)
            }
        }, (err) => {
            if (err) {
                res.status(400).json({name: err.name, messege: err.details[0].message})
            }
            next()
        })
    }
};