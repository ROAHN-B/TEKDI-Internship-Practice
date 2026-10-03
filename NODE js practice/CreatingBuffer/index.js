// Creating uninitiated buffer
const ubuf = Buffer.alloc(5);
console.log(ubuf)

// creating buffer from array
const abuf = new Buffer.from([16,32,48,64])
console.log(abuf)

// Creating buffer of a string
var sbuf = new Buffer.from("GeeksforGeeks", "ascii");
console.log(sbuf)

