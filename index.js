const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

var credentials = new AWS.SharedIniFileCredentials({
    profile: 'default',
});

AWS.config.credentials = credentials;


let params = {
    Message: 'rogerio comeu vitamina azul e ficou lilàs',
    PhoneNumber: '+5511987134941',    
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