'use strict';

// Event Hub

const events = require('./event-package');

// Require our deliveries ... they will hear our events
require('./delivery/driver/driver.js');
require('./delivery/vendor/vendor.js');

// For now, we're a dumb delivery, only caring about a single event.
// this one, comes to us from the vendor every time they get a package.
// When it happens, we need to tell the rest of the delivery the new packages
// so that each part can respond as it feels like

// The event handler takes in an event, and a callback to run.
// Callback can be writen inline as shown, or as a reference to a function
events.on('package-status', (payload) => {
  events.emit('package', { package: payload })
});
