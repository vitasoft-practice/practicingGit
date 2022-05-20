/** @type {import('next').NextConfig} */
const path= require ('path');

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "globals.scss";`,
},

}

module.exports = nextConfig
