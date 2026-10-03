// Write JavaScript code here
// cbuf = new Buffer.from(256);
// bufferlen = cbuf.write("My name is Rohan Belsare");
// console.log("No. of Octets in which string is written : "+ bufferlen);

// Write JavaScript code here
rbuf = new Buffer.from(26); 
var j; 

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) { 
	rbuf[j] = i ; 
} 

console.log( rbuf.toString('ascii'));