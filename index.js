const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/coverALL'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/coverALL/index.html'));});
app.listen(process.env.PORT || 3000, function(){
  console.log("Node app is running at localhost:" + app.get('port'));
});
