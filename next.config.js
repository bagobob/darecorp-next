// @ts-check
const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_API_URL
  }
}

module.exports = nextConfig
