module.exports = () => {
  
  let serverURL;
  let serverAPIURL;

  if (process.env.NODE_ENV === "production") {
    serverURL = process.env.NEXT_PUBLIC_BACKEND_URL_PRD;
    
  } else if (process.env.NODE_ENV === "sit") {
    serverURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    serverAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL_INT;
  } else {
    serverURL = "http://localhost:8081"; 
  }

  return {
    env: {
      serverURL,
      serverAPIURL,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "voucher-management.s3.ap-southeast-1.amazonaws.com",
          hostname: "voucher-app-sit.s3.ap-southeast-1.amazonaws.com",
        },
      ],
    },
  };
};
