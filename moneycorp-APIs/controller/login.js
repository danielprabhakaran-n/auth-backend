const mongoose = require('mongoose');
const Newuser = require('../model/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


async function login(ctx) {

    Newuser.findOne({ email: ctx.request.body.email })
      .then(res => {
            if (res.length < 1) {
                console.log('Email Failed');
            }
            bcrypt.compare(ctx.request.body.password, res.password, (err, result) => {
                if (err) {
                    console.log('Password Failed')
                }
                if (result) {
                    const token = jwt.sign({
                        email: res.email,
                        userId: res._id
                    }, 'process.env.JWT_KEY', {
                            expiresIn: "1h"
                        })
                    console.log('successfully login')
                    token: token
                    console.log(token)
                    ctx.body = token;
                }
            });
        })
        .catch(err => {
            console.log(err);
    })
}

module.exports = login;