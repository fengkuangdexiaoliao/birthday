/*
app.js 入口模块
职责：
    创建服务
    做一些服务相关配置
        模板引擎
        body-parser解析表单post请求体
        提供静态资源服务
        监听端口启动服务

*/

const express = require('express');
const router = require('./router');
const app = express();

app.use('/views/',express.static('./views'));
app.engine('html', require('express-art-template'));
//把路由容器挂载到app服务中
app.use(router);


app.listen(8000,function(){
    console.log('node server is running')
})