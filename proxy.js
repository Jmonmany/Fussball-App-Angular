const express = require('express');
const httpProxy = require('http-proxy');

// Create the Express app
const app = express();

// Create a new HTTP proxy instance
const apiProxy = httpProxy.createProxyServer();

// Set up a route for proxying requests to the API
app.use('/api', (req, res) => {
  // Proxy the request to the API
  apiProxy.web(req, res, {
    target: 'https://api.football-data.org/v4/competitions/',
    changeOrigin: true,
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Backend proxy running on port 3000');
});

