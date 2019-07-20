const express=require('express');
//引入body-parser
const bodyParser=require('body-parser');
//引入路由器
const userRouter=require('./routes/user.js');//nodejs
const proRouter=require('./routes/pro.js');  //ajax

//创建web服务器
var server=express();
server.listen(3000);

//跨域
const cors=require("cors");
server.use(cors({
 // origin: ["http://127.0.0.1:5050","http://localhost:5050"],
  origin:["http://127.0.0.1:8080","*","http://localhost:8080"],
  credentials: true
}))

//托管静态资源到public下
server.use( express.static('public') );

//使用body-parser中间件，将post请求的数据格式化为对象
server.use( bodyParser.urlencoded( { extended:false } ) );

//使用路由器
//使用(挂载)的url: /user
// /user/reg
server.use('/user',userRouter);
server.use('/pro',proRouter);
