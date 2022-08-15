'use strict';

/*
  Class 16 = Node Events (Internal Events - One App)
  Class 17 = TCP Events (Multiple Clients - Many Apps, Computers talk to each other)
  Class 18 = Socket.io (Multiple Clients, Many Apps, but Class 16 syntax)
  Class 19 = Queues
*/

const Events = require('events');

const events = new Events();  // Event Pool
/*
  If we were coding this out the "functional" way, we'd need a function for every possible thing
  And in that function, we'd have to call every single delivery part
  respondTopackage(status) {
    // deliver();
    // vendor();
    // driver();
  }
*/

// The new way, is to just have the deliveries listen for something that they need to care about
// Respond to events
events.on('packge', deliver);
events.on('package', vendor);
events.on('package', driver);

function deliver(payload) {
  console.log('Deliver package', payload.status, 'ready');
}

function driver(payload) {
  if (payload.status === customerId && location) {
    console.log('Pickup package');
  }
}

function vendor(payload) {
  if (payload.status === customerId && location && driver) {
    console.log('Send status ready to be delivered');
  }
}


// Here, we're going to simulate the part of the hub that tells the deliveries what's happening
// Instead of running a function that calls out to every deliveries function, we
// will insted "emit" or "fire" or "raise" an event. Deliveries that care about this event
// will do things on their own in response.
// We are effectively able to run 'n' number of functions with one line of code (the 'emit')
// and not even know what code gets run in response to it!
setInterval(() => {
  let status = Math.ceil(Math.random() * 100);
  console.log('--------------------------------')
  console.log('Status Ready or not:', status)
  events.emit('package', { status });
}, 30000)

