const axios = require('axios');
const object3 = require("../middlewares/auth");
const helperpytm = require('../helpers/helper');
const mapper = require('../mappers/mapperpytm');


async function getSinglePayment(ctx)
{ 
    console.log("sfyasghdjka");
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token,
            } 
    }; 
        var accountId = ctx.params.accountId;
        var paymentId = ctx.params.paymentId;
        const getallPayment = await axios.get(`https://sandbox-corpapi.moneycorp.com/accounts/${accountId}/payments/${paymentId}`, auth);
        const mcData = getallPayment.data.data;
        var getdydata = helperpytm.transformmcdy(mcData, mapper);
        delete mcData.au_attributes;
        getdydata.au_attributes = helperpytm.transformmcdy(mcData.attributes, mapper);
        getdydata.au_attributes.au_recipientDetails = helperpytm.transformmcdy(mcData.attributes.recipientDetails, mapper);
        ctx.body = getdydata; 
}
        module.exports = getSinglePayment;