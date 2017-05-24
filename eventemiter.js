var EventEmiter=require("events").EventEmitter;
var emiter=new EventEmiter();
var fs=require("fs");
var path=require("path")
var filepath=path.join(__dirname,"sample.txt")
console.log(__dirname)//gives exact same path
//var filepath=__dirname+"/sample.txt"

emiter.on("start reading",function(filepath){
	console.log("start reading the fiole")
	fs.readFile(filepath,"utf-8",function(err,data){
		if(err)
		{
		emiter.emit("error",err)
		return;
	}
	emiter.emit("print_content",data)
	})
})


emiter.on("print_content",function(data){
	console.log(data)
	emiter.emit("done","sucesfully done reading the content")
})
emiter.on("error",function(message){
	console.log(message);
})
emiter.on("done",function(message){
	console.log(message);
})

emiter.emit("start reading",filepath);
