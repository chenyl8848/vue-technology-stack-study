const express = require('express')

const history = require('connect-history-api-fallback')

const app = express()

// 访问静态资源
app.use(express.static(__dirname + '/static'))

app.use(history())

app.get("/student", (request, response) => {
    // console.log(request);
    response.send({
        name: '张三',
        age: 18
    })
})

app.listen(8787, (error) => {
    if (!error) {
        console.log('服务器启动成功!');
    } else {
        console.log(error);
    }
})