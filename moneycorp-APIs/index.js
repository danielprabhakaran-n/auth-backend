const koa = require('koa');
var delay = require('koa-delay');
const router = require('./router');
var objectMapper = require('object-mapper');
const object3 = require("./middlewares/auth");
const NodeCache = require( "node-cache" );
var bodyParser = require('body-parser');
const koaBody = require('koa-body');
var mapKeys = require('lodash.mapkeys');
const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we make
const mongoose = require('mongoose');

  
 var jsonParser = bodyParser.json() 
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const myCache = new NodeCache();
const app = new koa();

app.use(koaBody());
object3.settime();
app.use(router.routes());
app.use(cors());
app.use(fileUpload());

app.listen(8081);

module.exports = app;
