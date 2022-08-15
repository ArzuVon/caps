'use strict';

const events = require('./event-package');
const handlers = require('./driver-handlers.js');

// The packageDelivered will emit a "light" event with some payload ... here's how the arms handle that
// Note, the arms module probably cares about a billion other events ...
// Note, also that we've pulled in the callback function from a separate module
events.on('delivery', handlers.deliverPackage);
