const axios = require('axios');
const Router = require("koa-router");
var objectMapper = require('object-mapper');
var gethelper = require('../helpers/helper');
var obje = require('../controller/createRecipt');
const mapcontroller = require("../mappers/map");


async function getrecipient(ctx)
{
    const auth = 
    {
        headers: 
            {
                "Authorization": "Bearer " +  ctx.token
            } 
    }; 
    // console.log(ctx.token);
    var countryCode = ctx.params.countryCode;
    var currency = ctx.params.currency;
    const getrecipientdetails = await axios.get(`https://sandbox-corpapi.moneycorp.com/references/recipientRequirements/${countryCode}`, auth);  
    const array = getrecipientdetails.data.data.attributes.currencies;
    var currencyFields;
            for(let i=0; i<array.length; i++) 
            {
               if (array[i].currencyCode  ===  currency) 
                {
                    currencyFields=array[i]; 
                }
            }
            var obje =   gethelper.transfrom(currencyFields.fields, mapcontroller);
            ctx.body = obje;
};           
          module.exports = getrecipient;