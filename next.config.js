module.exports = () => {
  
  let backendAPIURL;

  if (process.env.NODE_ENV === "production") {
    backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL_PRD;
  } else if (process.env.NODE_ENV === "sit") {
    backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  } else {
    backendAPIURL = "http://localhost:8081"; // Assuming local server
  }

  return {

    env: {
      backendAPIURL,
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
