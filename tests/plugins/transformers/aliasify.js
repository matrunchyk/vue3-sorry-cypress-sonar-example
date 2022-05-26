const through = require('through2');
const path = require('path');
const ts = require('typescript');

const isJson = code => {
  try {
    JSON.parse(code);
  } catch (e) {
    return false;
  }

  return true;
};

module.exports = function defaultExport(fileName, opts) {
  opts.typescript = true;
  const chunks = [];

  return through(
    (buf, enc, next) => {
      chunks.push(buf.toString());
      next();
    },
    function transform(next) {
      const text = chunks.join('');

      if (isJson(text)) {
        this.push(text);
      } else {
        const basePath = path.join(__dirname, '../../../../src');
        const transformed = text
          .replaceAll(/ from '@\//g, ` from '${basePath}/`)
          .replaceAll(/import\.meta\.env/g, 'process.env')
          .replaceAll(
            new RegExp(`import router from '${basePath}/router';`, 'gmi'),
            'const router = {replace: window?.Cypress?.routerReplace || (() => {}), push: window?.Cypress?.routerPush || (() => {})}',
          );

        this.push(
          ts.transpileModule(transformed, {
            // explicitly name the file here
            // for sourcemaps
            fileName,
            compilerOptions: {
              esModuleInterop: true,
              // inline the source maps into the file
              // https://github.com/cypress-io/cypress-browserify-preprocessor/issues/48
              inlineSourceMap: true,
              inlineSources: true,
              downlevelIteration: true,
            },
          }).outputText,
        );
      }

      next();
    },
  );
};
