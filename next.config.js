/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'voucher-management.s3.ap-southeast-1.amazonaws.com',
            },
        ],
    },
}
