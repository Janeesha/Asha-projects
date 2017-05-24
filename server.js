var express = require("express");
var app= express();

app.get("/",function(request,response){
	response.json({message:"hello bangalore!!"})

})

app.get("/user",function(request,response){
	response.json({message:"hello mangalore!!"})

})
app.get("/customer",function(request,response){
	var customer={customer:"landt",location:"mysore",state:"karnataka"};
	response.json(customer)

})

var port=process.env.PORT||1337;//this says take port num from deployed server else by default 1337


app.listen(1337,function(){
	console.log("server listing at port 1337 !!")
})