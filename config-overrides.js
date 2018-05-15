const rewireLess = require("react-app-rewire-less-modules");

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = rewireLess(config, env);
    // with loaderOptions
    // config = rewireLess.withLoaderOptions('', someLoaderOptions)(config, env);
    // with override localIdentName
    // config = rewireLess.withLoaderOptions(
    //   `${env === "production" ? "foobar" : "[local]"}-[hash:base64:8]`,
    //)(config, env);
    // ...
    return config;
};