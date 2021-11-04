/** @type {import('next').NextConfig} */
module.exports = {
  esmodules: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    disableStaticImages: true,
    domains: ['i.ibb.co'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
        type: 'asset/resource',
        generator: {
            filename: 'static/chunks/[path][name].[hash][ext]'
        },
    });

    return config;
}
}