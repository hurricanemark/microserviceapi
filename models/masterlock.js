var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('masterlock', {
    "description": "Category: master security access for personal accounts\nClassify information.  FYO",
    "connector": "memory",
    "fields": {
        "businessName": {
            "type": "string",
            "description": "Account provider",
            "required": true
        },
        "userID": {
            "type": "string",
            "required": true
        },
        "passwd": {
            "type": "string"
        },
        "challengQAs": {
            "type": "array"
        },
        "createdDate": {
            "type": "date"
        },
        "lastUpdate": {
            "type": "date"
        },
        "notes": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;