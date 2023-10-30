const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write('<html>')
        res.write('<head><title>server</title></head>')
        res.write('<body><form action="/messages" method="POST"><input type="text" name="message"><button>send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(req.url === '/messages' && req.method === 'POST'){
        
        const body = []
        req.on('data',(chunk)=>{            
            body.push(chunk);
        })

        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('SimpleServer/message.txt',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/')
                return res.end();
            })

        })  

    }
})

server.listen(2000,()=>{
    console.log("Server is live...")
})