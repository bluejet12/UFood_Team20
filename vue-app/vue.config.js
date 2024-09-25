const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 8080, // Matches your localhost port
    open: true, // Automatically open the browser when server starts
  },
  pluginOptions: {
    dotenv: {
      path: './.env', // Make sure this is correct
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'), // Alias @ to the src directory
      },
    },
  },
});
