import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve("./dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/icons/favicon.svg",
            title: "Ethan Van Der Heijden",
        })
    ],
};
