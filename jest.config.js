module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ["./jest-setup-after-env.js"],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation|axios|react-native-vector-icons)',
  ],
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"]
};
