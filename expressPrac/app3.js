const express = require('express');

const app = express();
app.set('port',3000); // 서버가 실행되면 포트 3000에서 요청 대기

app.use(function(req,res,next){
    console.log('First Middleware...');
    req.user = 'KSD';
    next(); // 다음 미들웨어로 제어를 넘김, 호출하지 않으면 요청처리가 이 함수에서 멈춤
});
app.use(function(req,res,next){
    console.log('Second Middleware...');
    res.status(200).send(`<h1>${req.user}responds at Express Server</h1>`);
});

app.listen(app.get('port'),()=> { // 서버가 성공적으로 실행되었을 때 콜백함수 실행
    console.log('Server listening on port 3000');
});