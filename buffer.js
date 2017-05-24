var buffer=new Buffer("hello")
var buffer=new Buffer("hello hi")

console.log(buffer);

console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write("wo");
console.log(buffer.toString())
console.log(buffer.toString());