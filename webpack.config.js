const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        main: "./src/main.js",
        menu: "./src/menu.js",
        header: "./src/header.js",
        about: "./src/about.js",
    },
    devServer: {
        static: "./dist",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
        ]
    }
}