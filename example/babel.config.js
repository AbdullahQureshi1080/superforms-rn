module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
