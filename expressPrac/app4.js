const express = require('express');
const app = express(); // express 애플리케이션 객체로 app 생성

app.get('/',(req,res)=>{ // http GET 요청을 처리하기 위한 라우트
    res.status(200).send('<h1>Welcome !!</h1>'); 
});

app.get('/about',(req,res)=>{
    res.status(200).send('<h2>Here is KSD home</h2>');
});

app.listen(3000); // Express 서버를 포트 3000에서 실행