
const event = require('events');
let EventEmitter = new event()
const fs = require('fs')
//In Node.js, EventEmitter.on(eventName, listenerFunction) requires:
//the name of the event as a string (like 'greet')
//the listener function as the second argument

// ShortHand
// EventEmitter.on('eventName', ()=>{       //EventEmitter.on,EventEmitter.once,EventEmitter.off
// console.warn('Hello Events');
// })


// function lFN_Greatings(argument1) {
//     console.warn('Hello Events' + argument1);
// }
// EventEmitter.on('eventName', lFN_Greatings)
// EventEmitter.emit('eventName', 'ankit');

// // Remove listener
// EventEmitter.removeListener('eventName', lFN_Greatings)

// // or newer way
// EventEmitter.off('eventName', lFN_Greatings)
// EventEmitter.emit('eventName')

// //Error
// EventEmitter.on('error', (err) => {
//     console.error('Error caught:', err.message);
// });
// EventEmitter.emit('error', new Error('Something went wrong!'));

//Task 1.
// 1. Basic Event Trigger
// Create an EventEmitter.
// Make it listen for "greet" event.
// Emit "greet" with your name.

EventEmitter.on('greet',()=>{
console.warn('Hello, Ankit!');
})

EventEmitter.emit('greet')

// 2. Event with Parameters
// Create an event "order".
// Pass product name and quantity when emitting.
// Listener should print:

EventEmitter.on('order',(argu_1,argu_2)=>{
    console.warn('Order received : ' + argu_1 + " " +  argu_2);
})

EventEmitter.emit('order',2,'Laptops')

// 3. Multiple Listeners for Same Event
// Create "login" event.
// Attach two listeners:
// Logs "User logged in".
// Logs "Sending welcome email...".
// Emit "login".
// 👉 Both listeners should run.
EventEmitter.on('login',()=>{
    console.warn('User logged in');
})

EventEmitter.on('login',()=>{
    console.warn('Sending welcome email...');
})

EventEmitter.emit('login')

// 4. once() Usage
// Use .once() for an event "payment".
// Emit "payment" twice.
// 👉 Listener should run only the first time.
EventEmitter.once('payment',()=>{
    console.warn('payment');
})

EventEmitter.emit('payment')
EventEmitter.emit('payment')

// 5. Custom Event + File Writing
// Create "saveData" event.
// When emitted, write "Event-driven data saved!" into a file using fs.

EventEmitter.on('saveData',()=>{
    fs.writeFile('./event_log.txt','Event-driven data saved!',(err)=>{
        if(err){
            console.warn('Event-driven data not saved!');
        }else{
            console.warn('Event-driven data saved!');
        }
    })

})

EventEmitter.emit('saveData')
