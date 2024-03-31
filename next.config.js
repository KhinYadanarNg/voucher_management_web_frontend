module.exports = () => {

  return {
  
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
