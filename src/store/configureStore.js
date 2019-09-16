const production = require('./configureStore.prod');
const dev = require('./configureStore.dev');

if (process.env.NODE_ENV === 'production') {
  module.exports = production;
} else {
  module.exports = dev;
}
