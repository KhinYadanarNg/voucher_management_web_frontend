const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  setupFiles: ["./setup.jest.ts"],
  moduleNameMapper: {
    "^jose": require.resolve("jose"),
    "^@panva/hkdf": require.resolve("@panva/hkdf"),
    "^preact-render-to-string": require.resolve("preact-render-to-string"),
    "^preact": require.resolve("preact"),
    "^uuid": require.resolve("uuid")
  }
};

module.exports = createJestConfig(config);