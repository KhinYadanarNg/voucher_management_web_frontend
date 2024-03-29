module.exports = () => {
  
  let serverURL;

  if (process.env.NODE_ENV === "production") {
    serverURL = process.env.NEXT_PUBLIC_BACKEND_URL_PRD;
  } else if (process.env.NODE_ENV === "testing") {
    serverURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  } else {
    serverURL = "http://localhost:8081"; // Assuming local server
  }

  return {
    env: {
      serverURL,
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
