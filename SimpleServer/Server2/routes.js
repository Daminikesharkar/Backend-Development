const fs = require("fs");

const requestHandler= (req,res)=>{
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
    
        res.write("<html>");
        res.write("<head><title>Server</title></head>");
        res.write("<body>");
        res.write(
          "<form action='/messages' method='POST'><input type='text' name='message' placeholder='Type your message' required><button>Send</button></form>"
        );
    
        fs.readFile("SimpleServer/message.txt", "utf8", (err, data) => {
          if (!err) {
            const messages = data.split("\n").filter((message) => message.trim() !== "");
            res.write("<h2>Existing Messages:</h2>");
            res.write("<ul>");
            messages.forEach((message) => {
              res.write("<li>" + message + "</li>");
            });
            res.write("</ul>");
          }
          res.write("</body>");
          res.write("</html>");
          res.end(); 
        });
      } else if (req.url === "/messages" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
    
        req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];
          fs.appendFile("SimpleServer/message.txt", message + "\n", (err) => {
            if (err) {
              console.error("Error writing to message.txt");
            }
            res.writeHead(302, { "Location": "/" });
            res.end(); 
          });
        });
      }
}
module.exports = requestHandler;