/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    apiUrl: process.env.API,
    domainUrl: `https://${process.env.DOMAIN_URL}`,
    version: process.env.VERSION,
    apiType: process.env.API_TYPE,
    resellerID: process.env.RESELLER_ID,
  },
};

module.exports = nextConfig;
