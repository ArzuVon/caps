'use strict';

const events = require('./event-package');

// The brain will emit a "light" event with some payload ... here's how the eyes handle that
// Note, the eyes module probably cares about a billion other events ...
// Interesting ... we're the ones that started this whole thing with the setTimeout at the bottom
events.on('deliver', driver);
events.on('deliver', pickup);

function pickup(payload) {
  console.log('Package has Customer ID and location to send', payload.brightness, 'status ready');
}

function eyelid(payload) {
  if (payload.brightness >= 75) {
    console.log('eyes are squinting');
  }
}

// The eyes see all!
// Let's simulate walking outside
// Every 2 seconds, tell the brain how much light we detected
setInterval(() => {
  // Set a random number on a scale of 1-100 for how bright it is
  let brightness = Math.ceil(Math.random() * 100)
  console.log('--------------------------------');
  console.log('Brightness Detected:', brightness);

  // Tell the brain, we see some light
  events.emit('light-detected', brightness)
}, 2000)

module.exports = { pupil, eyelid }
