const express = require('express');
const app = express();

app.use('/views/',express.static('./views'));
app.engine('html', require('express-art-template'));

app.get('/',function(req,res){
    res.render('index.html', {});
})

app.listen(5000,function(){
    console.log('node server is running')
})