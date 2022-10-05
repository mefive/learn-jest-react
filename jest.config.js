/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
};

module.exports = config;
