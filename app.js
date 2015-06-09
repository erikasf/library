var express = require("express");
var app == express();
var bodyParser = require('body-parser'),
methodOverride = require("method-override");
var books = [];
var id = 1;

//now that the variables are done,we can set up our middle ware with the app.us expression.
//although we use app.set for the ejs.
//
APP.SET("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))://i know this is how its supposed to be written but i'm still confused as to why
app.use(methodOverride("_method"));

app.get("/",function(reqest, response){
	response.render("index", {books:books});//still need help with solidifying why this is done like this

})
app.post("/new", function(request, response{
	var book = {};
	book.title = request.body.title;
	book.author = request.body.author;
	book.year = request.body.year;
	book.id = id;
	id ++
	books.push(book);
	console.log(books);
	response.redirect("/");
})

app.get("/:id", function(request, response){
	books.forEach(function(book){
		if(book.id === Number(request.params.id)) {
			response.render("show",{book:book})
		}
	})
})

app.get("/edit/:id", function(request, response){
	books.forEach9function(book){
		if(book.id === Number(request.params.id)){
			TempGlobalId = Number(request.params.id)
			response.render("edit",{id:request.params.id, book:book});
		}
	}
})
app.put("/putItOut",function(request, response){
	books.forEach(function(request, repsonse){
		books.forEach(function(book){
			if(book.id === TempGlobalId){
				book.title = request.body.title,
				book.author = request.body.author,
				book.year = request.body.year
			}
		})
		response.redirect('/')

	})
})
	app.delete ("delete/:id", function(request, response){
		books.forEach(function(book.id === Number(request.params.id)){
			var index = books.indexOf(book)
			books.splice(index, 1);
			})	
		
		response.redirect("/")
	})
	app.listen(3000,function(){
	console.log("For your viewing pleasure, we will be serving books on port 3000")
})
