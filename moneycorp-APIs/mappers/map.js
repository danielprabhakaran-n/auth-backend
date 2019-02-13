const getrecptcontroller = require("../controller/getrecp");
var objectMapper = require('object-mapper');

// function fieldChange(ctx)
// {
    var currencyCode =  
        [
            {fieldName:"paymentStatus", newFieldName:"au_paymentStatus"},  
             {fieldName:"accountCurrency", newFieldName:"au_accountCurrency"},            
             {fieldName: "accountName", newFieldName:"au_accountName"},
             {fieldName: "accountCountry", newFieldName:"au_accountCountry"},
            {fieldName:"swiftBicCode", newFieldName:"au_swiftBicCode"},
             {fieldName:"iban", newFieldName:"au_iban", nameNewField: "au_iban"},
            {fieldName:"branchCode", newFieldName:"au_branchCode"},
             {fieldName:"accountNumber", newFieldName:"au_accountNumber"},
             {fieldName:"recipientStreet", newFieldName:"au_recipientStreet"},
             {fieldName:"recipientCity", newFieldName:"au_recipientCity"},
             {fieldName:"recipientStateOrProvince", newFieldName:"au_recipientStateOrProvince"},
             {fieldName:"recipientZipPostCode", newFieldName:"au_recipientZipPostCode"},
             {fieldName:"recipientCountry", newFieldName:"au_recipientCountry"},
             {fieldName:"intermediaryBranchCode", newFieldName:"au_intermediaryBranchCode"},
             {fieldName:"intermediaryAccount", newFieldName:"au_intermediaryAccount"},
             {fieldName:"intermediarySwiftBicCode", newFieldName:"au_intermediarySwiftBicCode"},
             {fieldName:"intermediaryIban", newFieldName:"au_intermediaryIban"},
             {fieldName:"bankAccountCurrency", newFieldName: "au_bankAccountCurrency"}, 
             {fieldName: "bankAccountName", newFieldName: "au_bankAccountName"}, 
             {fieldName: "bankAccountCountry", newFieldName:"au_bankAccountCountry"},
             {fieldName:"swiftBicCode", newFieldName: "au_swiftBicCode"},
             {fieldName:"iban", newFieldName: "au_iban"},
             {fieldName:"accountId", newFieldName: "au_accountId"},
             {fieldName:"createdAt", newFieldName: "au_createdAt"},
             {fieldName:"createdBy", newFieldName: "au_createdBy"},
             {fieldName:"complianceStatus", newFieldName: "au_complianceStatus"},
             {fieldName:"active", newFieldName: "au_active"},
             {fieldName:"bankName", newFieldName: "au_bankName"},
             {fieldName:"subAccount", newFieldName: "au_subAccount"},
             {fieldName:"recipientReference", newFieldName: "au_recipientReference"},
             {fieldName:"data", newFieldName: "au_data"},
             {fieldName:"id", newFieldName: "au_id"},
             {fieldName:"type", newFieldName: "au_type"},
             {fieldName:"attributes", newFieldName: "au_attributes"},
             {fieldName:"recipientId", newFieldName: "au_recipientId"},
             {fieldName:"attributes", newFieldName: "au_attributes"},
             {fieldName: "bankName", newFieldName: "au_bankName"}, 
             {fieldName:"intermediaryAccountNumber", newFieldName:"au_intermediaryAccountNumber"},
             

        ]
      
// };

module.exports = currencyCode;