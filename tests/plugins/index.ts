/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `dev-server:start` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

import path from 'path';

const browserify = require('@cypress/browserify-preprocessor');

export default ((on, config) => {
  // @ts-ignore
  // eslint-disable-next-line global-require
  require('@cypress/code-coverage/task')(on, config);

  const options = browserify.defaultOptions;

  options.browserifyOptions.transform[1][1].babelrc = true;
  options.debug = false;
  options.typescript = require.resolve('typescript');
  options.browserifyOptions.transform[0] = [path.join(__dirname, './transformers/aliasify')];
  options.browserifyOptions.transform.push('browserify-istanbul');
  on('file:preprocessor', browserify(options));

  return config;
}) as Cypress.PluginConfig;
