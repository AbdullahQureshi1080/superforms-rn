module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    // [
    //   '@babel/preset-env',
    //   {targets: {node: 'current'}, modules: 'commonjs', loose: true},
    // ],
    // '@babel/preset-typescript',
    // '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Components': './src/components/src',
        },
      },
    ],
  ],
};
