var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  let date = new Date()

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        'id': {S: event.request.userAttributes.sub},
        '__typename': {S: 'User'},
        'username': {S: event.userName},
        'email': {S: event.request.userAttributes.email},
        'createdAt': {S: date.toISOString()},
        'updatedAt': {S: date.toISOString()},
      },
      TableName: process.env.CUSTOMERSTABLE
    }
    try {
      await ddb.putItem(params).promise()
      console.log("Success PUT")
    } catch (err) {
      console.log("ERROR Save Customer: ", err)
    }
    // to allow the operation to continue to cognito
    context.done(null, event)


  } else {
    console.log("Error: Nothing was written to DynamoDB")
    context.done(null, event)
  }

};
