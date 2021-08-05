const express =require('express');
const app=new express();
const port=process.env.PORT || 2000;
const nav=[
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addbook',name:'Add Book'},
    {link:'/addauthor',name:'Add Author'},
    {link:'/signup',name:'Sign Up'},
    {link:'/login',name:'LogIn'}
];//created before passing to any router
const booksRouter=require('./src/routes/bookroutes')(nav) //nav is passed
const authorRouter=require('./src/routes/authorroutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);

app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });
});
app.get('/addbook',function(req,res){
    res.render("addbook",{
        nav,
        title:'Library'
    });
});
app.get('/addbook/',function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });
});
app.get('/addauthor',function(req,res){
    res.render("addauthor",{
        nav,
        title:'Library'
    });
});
app.get('/addauthor/',function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });
});
app.get('/signup',function(req,res){
    res.render("signup",{
        nav,
        title:'Library'
    });
});
app.get('/login',function(req,res){
    res.render("login",{
        nav,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("server ready at"+ port)});
