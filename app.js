var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static(__dirname + '/public'));

//路由与业务逻辑
// app.get('/',function(req, res){
//     // res.send('hellow')
// })

app.use('/user',require('./routes/user.js'))
app.listen(80);
