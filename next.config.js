const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  let environment;

  console.log("printing the process.env.NODE_ENV", process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'production') {
    environment = 'production';
  } else if (process.env.NODE_ENV === 'testing') {
    environment = 'test';
  } else {
    environment = 'local'; // default to local environment
  }

  const envFile = `.env.${environment}`;
  const envPath = path.join(process.cwd(), envFile);
  const envConfig = dotenv.parse(fs.readFileSync(envPath));

  return {
    env: envConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'voucher-management.s3.ap-southeast-1.amazonaws.com',
                hostname: 'voucher-app-sit.s3.ap-southeast-1.amazonaws.com'
            },
        ],
    },
    // images: {
      
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'voucher-management.s3.ap-southeast-1.amazonaws.com',
    //     },
    //     {
    //       protocol: 'https',
    //       hostname: 'voucher-app-sit.s3.ap-southeast-1.amazonaws.com'
    //     }
    //   ],
    // }
  };
};
