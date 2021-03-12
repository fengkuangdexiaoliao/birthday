var express = require('express')
var routerList = require('./routerConfig');
const changes = require('./server/change');
const index = require('./server/index');
//1.创建路由容器
var router = express.Router();

//2.把路由挂载到路由容器中
routerList.forEach(item=>{
    router[item.methods](item.url,function(req,res){
        (item.name)(req,res);
    })
})
router.get('/',function(req,res){
    res.render('index.html', {});
})

module.exports = router;