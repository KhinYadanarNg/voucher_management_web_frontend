module.exports = () => {

  return {
  
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "voucher-app-prd.s3.ap-southeast-1.amazonaws.com",
          hostname: "voucher-app-sit.s3.ap-southeast-1.amazonaws.com",
        },
      ],
    },
  };
};
