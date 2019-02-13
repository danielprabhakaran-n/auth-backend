const axios = require('axios');
const object3 = require("../middlewares/auth");
const mapper = require('../mappers/mapperpytm');
const helperpytm = require("../helpers/helper");
const uuid = require('uuid/v1')

async function addPayment(ctx)
{
    console.log(ctx.request.body)
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token,
                "Idempotency-Key": uuid()
            } 
    }
    console.log(auth);
    const bodyreq = ctx.request.body.data.attributes;
    // console.log(bodyreq);
    const mcAttributeField = helperpytm.transformfields(bodyreq, mapper);
    // console.log(mcAttributeField);
    const body = 
        {
            data:
             {
                type : "createPayment",
                attributes:mcAttributeField
             }
        };
        console.log(body);
    var accountId = ctx.params.accountId;
    console.log(`https://sandbox-corpapi.moneycorp.com/accounts/${accountId}/payments`)
    const createpayment = await axios.post(`https://sandbox-corpapi.moneycorp.com/accounts/${accountId}/payments`, body, auth);
    ctx.body = createpayment.data.data;
    const mcDataField = createpayment.data.data;
    console.log(mcDataField);
    const dyDataField = helperpytm.transformmcdy(mcDataField, mapper); 
    delete dyDataField.au_attributes;
    dyDataField.au_attributes = helperpytm.transformmcdy(createpayment.data.data.attributes, mapper);
    delete dyDataField.au_attributes.au_recipientDetails;
    dyDataField.au_attributes.au_recipientDetails = helperpytm.transformmcdy(createpayment.data.data.attributes.recipientDetails, mapper);
    ctx.body = dyDataField; 
};

module.exports = addPayment;