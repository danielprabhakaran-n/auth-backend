const Profile = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');




async function userUpdate(ctx) 
{
        const user = new Profile
        ({ 
             auth_id: new mongoose.Types.ObjectId(),
            user_id: new mongoose.Types.ObjectId(),
            mobile: ctx.request.body.mobile,
            address: ctx.request.body.address,
            gender: ctx.request.body.gender,
          firstname: ctx.request.body.firstname
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
module.exports = userUpdate;