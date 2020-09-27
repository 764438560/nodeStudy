const http=require('http')
const querystring=require('querystring')
const server=http.createServer((req,res)=>{
    let url=req.url
    req.query=querystring.parse(req.url.split("?")[1])
    res.end(JSON.stringify(req.query))
})
server.listen(8000)