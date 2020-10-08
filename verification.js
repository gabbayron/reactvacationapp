const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    if (req.header('Authorization')) {
        jwt.verify(req.header('Authorization'), 'secretkey', (err, user) => {
            if (err) {
                res.status(403).json({ error: true, msg: err.message })
            } else {
                req.user = user
                next()
            }
        })
    } else {
        res.status(401).json({ error: true, msg: 'Expected Token' })
    }
}

const verifyAdmin = (req, res, next) => {
    if (req.header('Authorization')) {
        jwt.verify(req.header('Authorization'), 'secretkey', (err, user) => {
            if (err) {
                res.status(403).json({ error: true, msg: err.message })
            } else {
                if (user.role === 'admin') {
                    req.user = user
                    next()
                } else {
                    res.status(403).json({ error: true, msg: "Not Authorized To Preform This Action!" })
                }
            }
        })
    } else {
        res.status(401).json({ error: true, msg: 'Expected Token' })
    }
}

module.exports = {
    verifyAdmin,
    verifyUser
}