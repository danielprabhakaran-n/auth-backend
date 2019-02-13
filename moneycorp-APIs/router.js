const koa = require('koa');
const Router = require("koa-router");
const object3 = require("./middlewares/auth");
const getrecptcontroller = require("./controller/getrecp");
const mapcontroller = require("./mappers/map");
const createrecpt = require('./controller/createRecipt');
const createpytm = require('./controller/payment')
const getallaccounts = require('./controller/getPayments')
const singlepayment = require('./controller/singlePayment')
const findpaymentdetails = require('./controller/findPayments')
const beneFiciary = require('./controller/getBeneficiary')

const signUp = require('./controller/user')
const login = require('./controller/login')
const update = require('./controller/updateProfile')

const router = new Router();



router
.get("/accounts/:accountId/:pageNumber/:pageSize", object3.getToken, beneFiciary)
.get("/getcodes/:countryCode/:currency", object3.getToken, getrecptcontroller)
.post("/accounts/:accountId/recipients", object3.getToken, createrecpt)
.post("/accounts/:accountId/payment", object3.getToken, createpytm)
.get("/getaccounts/:pageNumber/:pageSize", object3.getToken, getallaccounts)
.get("/findSinglePayment/:accountId/:paymentId", object3.getToken, singlepayment)
.post("/findpayments/:accountId/:pageNumber/:pageSize", object3.getToken, findpaymentdetails)


.post("/signUp",  signUp)
.post("/login",  login)
.post("/update",  update)



module.exports = router;        