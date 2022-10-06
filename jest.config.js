/** @type {import('jest').Config} */
const config = {
    automock: false,
    setupFilesAfterEnv: ["./jest.setup.js"],
    verbose: true,
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "@components/(.*)": "<rootDir>/src/components/$1",
    },
};

module.exports = config;
