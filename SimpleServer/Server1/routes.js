const fs = require("fs")

const requestHandler = (req,res) =>{
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
            fs.writeFile('SimpleServer/Server1/message.txt',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/')
                return res.end();
            })

        })  

    }
}

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: "Some text"
// }

// exports.handler = requestHandler;
// exports.someText = 'Some text'