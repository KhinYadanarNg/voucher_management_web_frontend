const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
let serverURL_TEST;

module.exports = () => {
  let environment;

  console.log("Printing the process.env.NODE_ENV : ", process.env.NODE_ENV);

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

  // serverURL_TEST = envConfig.NEXT_PUBLIC_APP_API_ENDPOINT;
  console.log("Printing the envConfig.NEXT_PUBLIC_APP_API_ENDPOINT in next.config.js : ", envConfig.NEXT_PUBLIC_APP_API_ENDPOINT);

  return {
    env: envConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'voucher-management.s3.ap-southeast-1.amazonaws.com',
                hostname: 'voucher-app-sit.s3.ap-southeast-1.amazonaws.com'
            },{
              protocol: 'https',
              hostname: envConfig.NEXT_PUBLIC_APP_API_ENDPOINT ,
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
