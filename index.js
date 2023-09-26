let express = require('express');
let path = require('path');

let app = express();


let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/' , (req, res)=>{
    res.render('login')
})

app.get('/signup' , (req, res)=>{
    res.render('signup')
})

app.get('/about' , (req, res)=>{
    res.render('about')
})

app.listen(port, ()=>{
    console.log("Server is running on port" + port)
})

app.use(express.static(path.join(__dirname, 'public')));
