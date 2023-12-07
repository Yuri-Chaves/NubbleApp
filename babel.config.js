module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolover', {
      root: ".",
      alias: {
        '@components': "./src/components",
        '@hooks': "./src/hooks",
        '@theme': "./src/theme",
        '@icons': "./src/assets/icons",
      }
    }]
  ]
};
