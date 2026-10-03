const stream = require('stream')
const fs = require('fs')
const http = require('http')
var crypto = require('crypto');
var util = require('util');
var emitter = require('events').EventEmitter;
var em = new emitter();
/* There are 4 types of stream data 
1. Redable stream - This is used to create a stream of data from reading.
*/


// const readableStream = fs.createReadStream('./article.md',{
//     highWaterMark:10
// });

// readableStream.on('readable',()=>{
//     process.stdout.write(`[${readableStream.read()}]`)
// });

// readableStream.on('end',()=>{
//     console.log('DONE')
// });



//  Writable streams - This stream is used to create a stream of data to write. For example: to write a large amount of data in a file.
// const file = fs.createWriteStream('file.txt');

// for (let i=0;i<10000;i++){
//     file.write(`hello World ${i}\n`);
// }
// file.end()



// Duplex stream - used to create stream which creates both readable and writable at same time
// const server=http.createServer((req,res)=>{
//     let body='';
//     req.setEncoding('utf8');
//     req.on('data',(chunk)=>{
//         body+=chunk;
//     });
//     req.on('end',()=>{
//         console.log(body);
//         try{
//             res.write('Hello World');
//             res.end();
//         }
//         catch(er){
//             res.statusCode=400;
//             return res.end(`error:$[er.message]`);
//         }
//     });
// }).listen(5000);


/*Transform streams → This stream is used to create a readable 
and writable stream, but the data in the stream can be modified 
while reading and writing to the stream. */

// var Transform = stream.Transform ||
//   require('readable-stream').Transform;

// function codingninjas(options) {
//     if (!(this instanceof codingninjas)) {
//     return new codingninjas(options);
//   }


//   Transform.call(this, options);

//   this.digester = crypto.createHash('val1');
// }
// util.inherits(codingninjas, Transform);

// codingninjas.prototype._transform = function (chunk, enc, cb) {
 
//   var buffer = (Buffer.isBuffer(chunk)) ?
//     chunk :
//     new Buffer(chunk, enc);
//   this.digester.update(buffer); 

//   cb();
// };

// codingninjas.prototype._flush = function (cb) {
//   this.push(this.digester.digest('hex'));
//   cb();
// };

// var codingninjas = new ShaSum();
// codingninjas.pipe(process.stdout); // output to stdout
// codingninjas.write('hello world\n'); // input line 1
// codingninjas.write('another line');  // input line 2
// codingninjas.end();  // finish



// Stream and Event Emitters

//Subscribe FistEvent
em.addListener('FirstEvent',function(data){
    console.log('This is Subscriber: '+data);
});

// Subscribe second event
em.on('SecondEvent',function(data){
    console.log('First Subscriber: '+data);
});

// Raising FirstEvent 
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
 // Raising SecondEvent 
em.emit('SecondEvent', 'This is my second Node.js event emitter example.');


