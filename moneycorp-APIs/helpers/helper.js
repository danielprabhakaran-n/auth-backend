const object3 = require("../middlewares/auth");
var objectMapper = require('object-mapper');
const getrecptcontroller = require("../controller/getrecp");
const _ = require('lodash');
const mapper = require('../mappers/map')


function transfrom(currencyFields, currencyCode)
{
    var newfields = [];
    var mapping  = currencyFields.map(function(element)
        {
            var find = _.find(currencyCode, {"fieldName" : element.fieldName}) 
            console.log(element.fieldName);
            element.fieldName = find.newFieldName;
            var newfields = element;
            return newfields;
        });
        return mapping;
};

function transformfields(bodypart, currencyCode)
{
     var newfield = [];
     console.log("transform");
     var mapped = _.mapKeys(bodypart, function(value, key)
    {
        var find = _.find(currencyCode, {newFieldName : key});
        mapped = find.fieldName
        var newfield = mapped;
        return newfield
    });
        return mapped;
        
       
}

function transformmcdy(mcdataFields, currencyCode)
{
     var mcdyfield = [];
     
     var mapping = _.mapKeys(mcdataFields, function(value, key)
    {
        var find1 = _.find(currencyCode, {fieldName : key});
        mapping = find1.newFieldName;
        var mcdyfield = mapping;
        return mcdyfield
    });
        return mapping;
       
}
 module.exports =  { transfrom, transformfields, transformmcdy };





