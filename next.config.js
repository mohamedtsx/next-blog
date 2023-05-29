/** @type {import('next').NextConfig} */ 


const nextConfig = {
  reactStrictMode: true,  
  webpack(config, { nextRuntime }) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'babel-loader', 
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    })
    
    
    if (typeof nextRuntime === "undefined") {
      const { IgnorePlugin } = require("webpack");
      const ignoreFs = new IgnorePlugin({ resourceRegExp: /fs/ });
      config.plugins.push(ignoreFs);
    };
    
    return config;
  }    
}

module.exports = nextConfig