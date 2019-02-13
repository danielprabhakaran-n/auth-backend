const Newuser = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');




async function userSignup(ctx) 
{
    const hash = await bcrypt.hash(ctx.request.body.password, 10);
            const user = new Newuser
        ({
            auth_id: new mongoose.Types.ObjectId(),
            email: ctx.request.body.email,
            password: hash,
            firstname: ctx.request.body.firstname,
            lastname: ctx.request.body.lastname,
            countrycode: ctx.request.body.countrycode,
            dateofbirth: ctx.request.body.dateofbirth,
           
        })
        try{
        let result = await user.save();
        console.log(result)
        ctx.body = result;
        }
        catch(ex){
            console.log(ex.message);
        }
}
module.exports = userSignup;