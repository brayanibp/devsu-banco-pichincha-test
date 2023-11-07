const nextJest = require('next/jest.js');
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/*/(.(ts|tsx|js|jsx))$': '<rootDir>/*/$1'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/.npm/(?!node-fetch)'
  ],
  // Add more setup options before each test is run
  injectGlobals: true,
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => {
  const config = await createJestConfig(customJestConfig)()
  // config.transformIgnorePatterns = [
  //   '<rootDir>/node_modules/.pnpm/(?!node-fetch)'
  // ]
  return config;
}