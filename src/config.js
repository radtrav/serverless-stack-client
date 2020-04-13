export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "pixelship-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://nwqnzr78e4.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_LBLJFzpH7",
    APP_CLIENT_ID: "cuhusfm5v5imquh89ajh5efl1",
    IDENTITY_POOL_ID: "us-east-2:f140d16c-f443-49c0-b342-848115f3fdd1"
  }
};