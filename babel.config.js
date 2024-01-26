module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@icons': './src/assets/icons',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@brand': './src/brand',
        },
      },
    ],
  ],
};
