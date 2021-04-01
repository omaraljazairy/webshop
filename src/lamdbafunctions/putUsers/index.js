'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region: "eu-central-1"})
exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "eu-central-1"})
    

    const params = {
        TableName: "Users",
        Item: {
            id: "2",
            firsName: "John",
            lastName: "Higgins"
        }
    }

    try {
        const data = await documentClient.put(params).promise();
        console.log('data: ', data);

    } catch (err) {
        console.log('error: ', err);
    }
}
