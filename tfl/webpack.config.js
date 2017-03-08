module.exports = {
    entry: "./src/index.js", // входная точка - исходный файл
    output: {
        path: "public",     // путь к каталогу выходных файлов
        filename: "bundle.js"       // название создаваемого файла
    },
    watch: true, // следить за изменениями в файлах
    watchOptions: {
        aggregateTimeout: 100 // т.е. пересобирать файлы начнет только спустя указанное в миллисекундах время (в данном случае 100)
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".js", ".jsx"] // расширения для загрузки модулей
    },
    module: {
        loaders: [   //загрузчики
            {
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query: {
                    presets: ["es2015", "react", "stage-2"]
                },
                plugins: ["transform-runtime"]
            }
        ]
    }
}