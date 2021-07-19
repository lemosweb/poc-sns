const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

var credentials = new AWS.SharedIniFileCredentials({
    profile: 'default',
});

AWS.config.credentials = credentials;


let params = {
    Message: 'Toda vez que a Helena é chora chora ela ri escondido',
    PhoneNumber: '+5511983530159',    
}


function sendSMS(params) {
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31'}).publish(params).promise();

    publishTextPromise.then((data) => {
        console.log("Message ID is " + data.MessageId);
    }).catch((err) =>{
        console.log(err, err.stack);
    });
}

sendSMS(params);