const express = reauire('express');

const app =express();

app.get('/',(request,response)=>{
     response.send('HEELO!')
});

app.listen(8000,()=>{
    console.log("8000监听中。。。")
});