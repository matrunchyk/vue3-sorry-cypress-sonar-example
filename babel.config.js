module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { useBuiltIns: 'entry', corejs: '3', targets: { node: 'current' } },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-import-meta',
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          },
        },
      };
    },
  ],
};
