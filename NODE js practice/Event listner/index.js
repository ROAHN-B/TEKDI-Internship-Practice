// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     _events: [Object: null prototype] { event: [Function (anonymous)] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined,
//   //     Symbol(shapeMode): false,
//   //     Symbol(kCapture): false
//   //   } true
// });
// myEmitter.emit('event', 'a', 'b');


// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// myEmitter.emit('event', 'a', 'b');


// Event handling only once
// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Ignored



// Error events
const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
