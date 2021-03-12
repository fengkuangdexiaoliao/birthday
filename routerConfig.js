const changes = require('./server/change');
const index = require('./server/index');
const router = [{
    url:'/index',
    server:index,
    methods:'post'
},{
    url:'/change',
    server : changes,
    methods:'post'
}]

module.exports=router;