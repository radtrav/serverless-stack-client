const dev = {
  STRIPE_KEY: "pk_test_XpPhGkklx2hsnneMmyoeDwtf00oJ5Okli3",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-41moxuzw75nu"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://x7grrdgtb9.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_J9rzmFjvH",
    APP_CLIENT_ID: "431p9g0i3us5q5n11c3k3ja6e1",
    IDENTITY_POOL_ID: "us-east-2:f57c01e5-1416-4a47-a443-2bd90f50a048"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_XpPhGkklx2hsnneMmyoeDwtf00oJ5Okli3",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-o83ydl7aitxm"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://pu4hw3jf1b.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_25JFJaWMN",
    APP_CLIENT_ID: "5lg2niftfcteh21o2eg0u7t5ip",
    IDENTITY_POOL_ID: "us-east-2:f9be14c2-4bd5-4c11-934d-c135aab05a54"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};