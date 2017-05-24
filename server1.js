var express = require("express");
var app= express();
var router=express.Router();//instead of app we use it here if we want

router.get("/",function(request,response){
	response.json({message:"hello bangalore!!"})

})

router.get("/user1",function(request,response){
	response.json({message:"hello mangalore!!"})

})
router.get("/customer",function(request,response){
	var customer={customer:"landt",location:"mysore",state:"karnataka"};
	response.json(customer)

})

app.use("/api",router)//its  a end point this is custom if we want to /user we have to give /api/user
//so here api is endpoint

var port=process.env.PORT||1337;//this says take port num from deployed server else by default 1337


app.listen(1337,function(){  //router wont listen port
	console.log("server listing at port 1337 !!")
})