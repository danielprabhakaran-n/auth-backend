const axios = require('axios');
const Router = require("koa-router");
var bodyParser = require('body-parser');
const object3 = require("../middlewares/auth");
const getrecptcontroller = require("../controller/getrecp");
const _ = require('lodash');
const helper = require("../helpers/helper");
const koaBody = require('koa-body');
const mapper = require('../mappers/map')
var mapKeys = require('lodash.mapkeys');


async function createrecipts(ctx)
{
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token,
                "Idempotency-Key": 032
            } 
    }; 
        // console.log(auth);
        const bodypart = ctx.request.body.data.attributes;
        const mcAttributesFields = helper.transformfields(bodypart, mapper); 
        const body = 
        {
            data:
             {
                type : "createRecipient",
                attributes:mcAttributesFields
             }
        };
        var accountId = ctx.params.accountId;
        const createarecipient = await axios.post(`https://sandbox-corpapi.moneycorp.com/accounts/${accountId}/recipients`, body, auth);
        const mcdataFields = createarecipient.data.data.attributes;
        const dydataFields = helper.transformmcdy(mcdataFields, mapper); 
        const dybody = 
        {
            data:
             {
                id: 52929,
                type: "Recipient",
                attributes:dydataFields
             }
        };
        ctx.body = dybody.data;
        
};
        module.exports = createrecipts;