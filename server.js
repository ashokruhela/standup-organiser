var express = require('express');
var app = express();

var port =3001;
var requestCount = 0;
app.use(express.static('dist'));
app.get('/', function(req, res){
    // res.send('hello world');
    res.send('./src/index.html');
    
    console.log('receive request # ', ++requestCount);
});

app.listen(port, function(){
    console.log('server started listening on port ' + port);
})