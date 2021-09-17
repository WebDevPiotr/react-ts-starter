module.exports = {
    roots: ['<rootDir>/'],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
    testRegex: '/test/.*(test|spec)\\.[jt]sx?$',
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.svg": "<rootDir>/test/svgrMock.js",
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ['js', 'jsx'],
};