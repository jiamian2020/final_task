const express = require('express');

const app = express();

app.get('/server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    response.send('Hello aja-2');
});

app.all('/server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    response.send('Hello aja  post');
});

app.all('/json-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: 'robin'
    };

    let str = JSON.stringify(data);

    response.send(str);
});


app.get('/ie', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('Hello ie-2');
});

app.get('/delay', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {

        response.send('延时响应');
    }, 3000)
});


app.listen(8000, () => {
    console.log("服务器已经启动，8000端口监听中....");
})