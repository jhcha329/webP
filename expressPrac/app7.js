const express = require('express');
const app = express();

app.use((req,res,next) => {
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
    const paramId = req.query.id;

    res.status(200).send(`
        <h1>Express Server responds as follows:<h1><hr>
        <div><p>User-Agent : ${userAgent}</p></div>
        <div><p>Param Name : ${paramName}</p></div>
        <div><p>Param ID : ${paramId}</p></div>
        `);
});

app.listen(3000,()=>{
    console.log('Server is starting at port 3000...');
})