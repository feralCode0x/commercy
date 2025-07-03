module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "fs": false,
        "https": false,
        "path": require.resolve("path"),
    }
    
    return config
}