const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/daniel-salin/daniel-salin.github.io'
  },
  () => {
    console.log('Deploy Complete!');
  }
);
