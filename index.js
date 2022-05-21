const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
/** this is custom js to help proxy in server.js*/
const webpackConfig = require('./webpack.config.js');


const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
/** If you have error creating proxy <app-url> to localhost  
 * Heroku internally redirect the Server port 8080 .
 *  For that reason we need to open listener  port(I used 3000 here) redirect 
through http-proxy-middleware*/
 app.use("/*", createProxyMiddleware(
    { target: "https://localhost:8080", 
    ws: true ,
     changeOrigin: true,
     secure:false,
     router: {
    'dev.localhost:3000': 'https://localhost:8080',
  },})) 

app.listen(process.env.PORT || 3000)

app.use(express.static(__dirname + '/dist/coverALL'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/coverALL/index.html'));});
app.listen(process.env.PORT || 3000, function(){
  console.log("Node app is running at localhost:" + app.get('port'));
});
