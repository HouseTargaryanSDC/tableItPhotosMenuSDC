'use strict';

function generateRandId(context, events, done) {
  const id = Math.floor(Math.random() * 500000 + 1);
  context.vars.id = id;
  return done();
}

module.exports = {
  generateRandId,
};
