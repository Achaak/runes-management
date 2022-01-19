const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { i18n } = require('./next-i18next.config')
//const { createSecureHeaders } = require('next-secure-headers')

const plugins = [withBundleAnalyzer, withPWA]
const nextConfig = {
  swcMinify: false,
  i18n,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  // async headers() {
  //   if (process.env.NODE_ENV === 'development') return []
  //   return [
  //     {
  //       source: '/(.*)?',
  //       headers: createSecureHeaders({
  //         frameGuard: 'deny',
  //         nosniff: 'nosniff',
  //         sanitize: '1; mode=block',
  //         contentSecurityPolicy: {
  //           directives: {},
  //         },
  //       }),
  //     },
  //   ]
  // },
}

module.exports = withPlugins(plugins, nextConfig)
