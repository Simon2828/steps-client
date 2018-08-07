

const dev = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "peermarkit-dev-serverlessdeploymentbucket-1rdqyi2x78fk9"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://svg6ycj9if.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_CW5H7g1bX",
    APP_CLIENT_ID: "1vrisploqpvqpkf6p1r798pkoe",
    IDENTITY_POOL_ID: "eu-west-2:872cfac9-7e3d-4067-abd1-32125477894d"
  }
};

const prod = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "peermarkit-prod-serverlessdeploymentbucket-wzuoz5dzzno9"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://g4sywjjoua.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_lflXkcsP5",
    APP_CLIENT_ID: "quosl6e8k8ibptlvgf0i03u3i",
    IDENTITY_POOL_ID: "eu-west-2:f0a0ccb6-d2ea-4dbb-8d01-440e642b1e79"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  //MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
