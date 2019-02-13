const axios = require('axios');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const Timer = require('setinterval');
const Router = require("koa-router");
const mykey = require("../controller/createRecipt");
const router = new Router();

const body = 
{
    "loginId": "nvayoApi",
    "apiKey": "FDE80673CFDE02496D2926FF5E98C2E7A418CC4D"
}
    function settime() 
    {
            console.log("set time");
            if (myCache.get("mykey") == undefined)
            {
                token();
                setTimeout(settime, 15*60*1000);
            }
                else
                {
                    setInterval(token, 15*60*1000);
                }
    }
               
            async function token() 
            {
                 const token1 = await axios.post("https://sandbox-corpapi.moneycorp.com/login", body);
                 myCache.set( "mykey", token1.data.data.accessToken);
                 var chachekey = myCache.get("mykey");
            };
                async function getToken(ctx, next)
            {
                var mykey = myCache.get("mykey");
                ctx.token = mykey;
                 return next();
            }
                module.exports = {getToken, settime, token};
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    

