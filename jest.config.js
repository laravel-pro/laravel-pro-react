module.exports = {
    testRegex: "resources/js/.*.test.js$",
    modulePaths: ["<rootDir>/resources/js"],
    moduleFileExtensions: ["js", "json", "jsx"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    transform: {
        "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest"
    },
    setupFilesAfterEnv: ["<rootDir>/resources/js/testSetup.js"]
};
