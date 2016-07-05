const path = require('path');
const ghpages = require('gh-pages');

ghpages.publish(path.join(__dirname, 'build'));
