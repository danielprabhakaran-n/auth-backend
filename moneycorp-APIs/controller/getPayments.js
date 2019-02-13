const axios = require('axios');
const object3 = require("../middlewares/auth");
const mapper = require('../mappers/mapperpytm');
const helperpytm = require("../helpers/helper");
const _ = require('lodash');
var map = require('lodash.map');

async function getPayment(ctx)
{
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token,
                
            } 
    }
    
    var pageNumber = ctx.params.pageNumber;
    var pageSize = ctx.params.pageSize;
    const getallPayment = await axios.get(`https://sandbox-corpapi.moneycorp.com/accounts/2012/payments?page%5Bnumber%5D=${pageNumber}&page%5Bsize%5D=${pageSize}`, auth);
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
};


module.exports = getPayment;