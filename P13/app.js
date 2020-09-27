const http=require("http")
const querystring=require("querystring")

http.createServer((req,res)=>{
    const method=req.method
    const url=req.url
    const path=url.split('?')[0]
    const query=querystring.parse(url.split('?')[1])
    res.setHeader('Conten-type','application/json')
    let resData={
        method,
        url,
        path,
        query
    }

    if(method==="POST"){
        let postData=''
        req.on('data',chunk=>{
            postData+=chunk.toString()
        })
        req.on('end',()=>{
            resData.postData=postData
            res.end(JSON.stringify(resData))
        })
    }else{
        res.end(JSON.stringify(resData))
    }
}).listen(8000)
