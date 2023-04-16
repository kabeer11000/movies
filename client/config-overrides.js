module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        https: false
    }
    // loaders.fallback = {
    //     "fs": false,
    //     "tls": false,
    //     "net": false,
    //     "http": require.resolve("stream-http"),
    //     "https": false,
    //     "zlib": require.resolve("browserify-zlib"),
    //     "url": require.resolve("url/"),
    //     "path": require.resolve("path-browserify"),
    //     "stream": require.resolve("stream-browserify"),
    //     // "util": require.resolve("util/"),
    //     "crypto": require.resolve("crypto-browserify")
    // }
    //
    return config
}
