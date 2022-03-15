module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
        modules: false,
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
