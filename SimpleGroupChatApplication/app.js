const express = require("express");
const fs = require('fs')
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const filePath = path.join(__dirname,'chatpage.html');
const msgfilePath = path.join(__dirname, 'messages.json');

if (!fs.existsSync(msgfilePath)) {
    fs.writeFileSync(msgfilePath, '[]');
}

//login page endpoint
app.get('/login',(req,res,next)=>{
    res.send('<form action="/login" method="post"><label for="username">Username:</label><input type="text" id="username" name="username" required><button type="submit">Login</button></form>')
})

//login handle endpoint
app.post('/login',(req,res,next)=>{
    const {username} = req.body
    // res.cookie('username', username); 
    res.send(`<script>localStorage.setItem('username', '${username}'); window.location.href = '/';</script>`);
    // res.redirect('/')
})

//chat page endpoint
app.get('/',(req,res,next)=>{
    // res.send('<form id="messageForm"><label for="message">Message:</label><input type="text" id="message" name="message" required><button type="submit">Send</button></form><ul id="messagesList"></ul>')
    res.sendFile(filePath);
})

//chat handle enpoint
app.post('/send-message', (req, res) => {
    const { username, message } = req.body;
    
    //read existing msgs and push new msg into the file
    const messages = JSON.parse(fs.readFileSync(msgfilePath, 'utf8'));
    messages.push({ username, message });
  
    fs.writeFileSync(msgfilePath, JSON.stringify(messages));  
  });

//writing msgs
app.get('/get-messages',(req,res,next)=>{
    const messages = JSON.parse(fs.readFileSync(msgfilePath,'utf8'));
    res.json(messages);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})