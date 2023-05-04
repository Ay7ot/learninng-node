const { createReadStream } = require('fs')
const http = require('http')

http
.createServer((req, res)=>{
    const fileRead = createReadStream('./content/big-txt.txt', 'utf8')
})
.listen(5000)