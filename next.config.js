/** @type {import('next').NextConfig} */
require('dotenv').config
const nextConfig = {
  images:{
    domains:['www.google.com']
  },
  env:{
    API_KEY:process.env.API_KEY,
    CONTEXT_KEY:process.env.CONTEXT_KEY
  },
  reactStrictMode: true,
}

module.exports = nextConfig
