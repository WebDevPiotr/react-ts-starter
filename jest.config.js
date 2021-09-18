module.exports = {
    roots: ['<rootDir>/'],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    testRegex: '/test/.*(test|spec)\\.[jt]sx?$',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.svg": "<rootDir>/test/svgrMock.ts",
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};