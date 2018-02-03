
const colors       = require('colors'),
      fse          = require('fs-extra'),
      parseArgs    = require('minimist'),
      { execSync } = require('child_process'),
      pkg          = require('../package.json');

const args = parseArgs(process.argv.slice(2), {
  alias: {
    w: 'watch',
    b: 'browser'
  }
});

const getCmd = ((browser, watch) => {
  if (browser && watch) {
    return `webpack-dev-server --config config/webpack.dev.browser.js --hot --inline --open`;
  } else if (browser) {
    return `webpack --config config/webpack.dev.browser.js`;
  } else if (watch) {
    return `webpack --config config/webpack.dev.js --watch`;
  } else {
    return `webpack --config config/webpack.dev.js`;
  }
});

const verb     = args.watch ? 'Watching' : 'Building',
      platform = args.browser ? 'the browser' : 'Electron';

console.log(`\n${verb} ${pkg.name} (v${pkg.version}) for ${platform}...\n`.cyan);

fse.removeSync('app/build/*');

execSync(getCmd(args.browser, args.watch), { stdio: 'inherit' });