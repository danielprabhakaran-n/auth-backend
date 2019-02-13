const axios = require('axios');
const object3 = require("../middlewares/auth");
const helperpytm = require('../helpers/helper');
const mapper = require('../mappers/mapperpytm');

async function findAllPayments(ctx)
{
    
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token,
            } 
    }; 
 
    const bodyreq = ctx.request.body.data.attributes;
    const mcAttributeField = helperpytm.transformfields(bodyreq, mapper);
    
    const body = 
    {
        data:
         {
            type : "findPayment",
            attributes:mcAttributeField
         }
    };
    var accountId = ctx.params.accountId;
    var pageNumber = ctx.params.pageNumber;
    var pageSize = ctx.params.pageSize;
    const getallPayment = await axios.post(`https://sandbox-corpapi.moneycorp.com/accounts/${accountId}/payments/find?page%5Bnumber%5D=${pageNumber}&page%5Bsize%5D=${pageSize}`, body, auth);
    console.log(getallPayment);
    ctx.body = getallPayment.data.data;
    const mcData = getallPayment.data.data;
    const datacollection = mcData.map(function(element)
    {
        var getdydata = helperpytm.transformmcdy(element, mapper);
        delete element.au_attributes;
        getdydata.au_attributes = helperpytm.transformmcdy(element.attributes, mapper);
        getdydata.au_attributes.au_recipientDetails = helperpytm.transformmcdy(element.attributes.recipientDetails, mapper);
        return getdydata;
       
    });
   
        ctx.body = datacollection; 
}

module.exports = findAllPayments;