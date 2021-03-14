var express = require('express')
var routerList = require('./routerConfig');

//1.创建路由容器
var router = express.Router();

//2.把路由挂载到路由容器中
routerList.forEach(item=>{
    router[item.methods](item.url,function(req,res){
        (item.server)(req,res);
    })
})
router.get('/',function(req,res){
    res.render('canvas.html', {});
})

module.exports = router;