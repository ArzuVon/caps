'use strict';

const events = require('./event-package');

// The delivery will emit a "status" event with some payload ... here's how the vendor handle that
// Note, the vendor module probably cares about a billion other events ...
// Interesting ... we're the ones that started this whole thing with the setTimeout at the bottom
events.on('deliver', vendor);
events.on('deliver', pickup);

function pickup(payload) {
  console.log('Package has Customer ID and location to send', payload.status, 'status ready');
}

function vendor(payload) {
  if (payload.status === true ) {
    console.log('Package has Customer ID, driver and location to send');
  }
}

// The vendor see all!
// Let's simulate pickup package
// Every 30 seconds, tell the delivery will know how much packages we detect
setInterval(() => {
  // Set a random number on a scale of 1-100 for how bright it is
  let status = Math.ceil(Math.random() * 100)
  console.log('--------------------------------');
  console.log('Package status Detected:', status);

  // Tell the brain, we see some light
  events.emit('Package status Detected', status)
}, 30000)

module.exports = { pickup, vendor }
