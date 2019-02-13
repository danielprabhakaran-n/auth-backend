const axios = require('axios');
const object3 = require("../middlewares/auth");
const helperpytm = require('../helpers/helper');
const mapper = require('../mappers/map');

async function getBeneficiary(ctx)
{
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token,
            } 
    }; 
 
    // const bodyreq = ctx.request.body.data.attributes;
    // const mcAttributeField = helperpytm.transformfields(bodyreq, mapper);
    
    
    var accountId = ctx.params.accountId;
    var pageNumber = ctx.params.pageNumber;
    var pageSize = ctx.params.pageSize;
    const getallBene = await axios.get(`https://sandbox-corpapi.moneycorp.com/accounts/${accountId}/recipients?page%5Bnumber%5D=${pageNumber}&page%5Bsize%5D=${pageSize}`, auth);
    const mcData = getallBene.data.data;
    const datacollection = mcData.map(function(element)
    {
        var getdydata = helperpytm.transformmcdy(element, mapper);
        delete element.au_attributes;
        getdydata.au_attributes = helperpytm.transformmcdy(element.attributes, mapper);
        // getdydata.au_attributes.au_recipientDetails = helperpytm.transformmcdy(element.attributes.recipientDetails, mapper);
        return getdydata;
       
    });
   
          ctx.body = datacollection; 
}

module.exports = getBeneficiary;