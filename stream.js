var fs=require("fs");
var filepath="./sample.txt"
var readable=fs.createReadStream(filepath,{encoding:"utf-8",highWaterMark:4*1024})

readable.on("data",function(chunk){
	console.log(chunk.length)
})

var writeable=fs.createWriteStream("./output.txt");
readable.on("data",function(chunk){
	console.log(chunk.length)
	writeable.write(chunk)
})