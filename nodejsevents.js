const EventEmitter=require('events')


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn off moter');
  setTimeout(()=>{
    console.log("band krde be pgl");
  },3000)
});
console.log("hi")
myEmitter.emit('waterfull');