'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region: "eu-central-1"})
exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "eu-central-1"})
    

    const params = {
        TableName: "Users",
        Key: {
            id: "112322"
        }
    }

    try {
        const data = await documentClient.get(params).promise();
        console.log('data: ', data);

    } catch (err) {
        console.log('error: ', err);
    }
}
