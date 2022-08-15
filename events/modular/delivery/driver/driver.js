'use strict';

const events = require('./event-package');
const handlers = require('./driver-handlers.js');

// The packageDelivered will emit a "status" event with some payload ... here's how the driver handle that
// Note, the driver module probably cares about a billion other events ...
// Note, also that we've pulled in the callback function from a separate module
events.on('delivery', handlers.deliverPackage);
