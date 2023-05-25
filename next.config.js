/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader'
        }
      })
      return config
    }
    
}

module.exports = nextConfig
