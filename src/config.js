export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HZK8hIXoHaac9w6Xs8EDqiYfVTYHNw606AAFj7bop9QecbmwTjzX2H0iE0DHfua8WJuZb2Hextur6uGf2DSYHfb00OKwi5ZOY",
    s3: {
      REGION: "us-east-1",
      BUCKET: "noland-phaxayaseng-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://gykbg9g4x3.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_axFSG3bPZ",
      APP_CLIENT_ID: "4gdunpnc7mt8vft1o4bmio47rh",
      IDENTITY_POOL_ID: "us-east-1:c7ad70a7-497b-4084-8382-b813374e8ea6"
    }
    
  };
