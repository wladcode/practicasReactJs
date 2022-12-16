module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            generators: true,
        },
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
    extends: ["prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": ["error"],
    },
};
