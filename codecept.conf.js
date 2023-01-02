/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */

require('@swc-node/register');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  name: 'buybook-web',
  tests: './tests/**/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:8080',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './tests/steps_file',
  },
  fullPromiseBased: false,
};
