
const express = require('express');

const app = express();

app.get('/',(request,response)=>{

    response.send('Hello ex');
});

app.listen(8000,()=>{
    console.log("服务器已经启动，8000端口监听中....");
})