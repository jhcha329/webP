const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('첫번째 미들웨어에서 요청 처리');
    res.redirect('http://hansung.ac.kr');
});

app.listen(3000);