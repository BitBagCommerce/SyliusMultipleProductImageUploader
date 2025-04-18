const path = require('path');
const Encore = require('@symfony/webpack-encore');
const pluginName = 'sylius-multiple-product-image-uploader';

const getConfig = (pluginName, type) => {
    Encore.reset();

    Encore
        .setOutputPath(`public/build/bitbag/${pluginName}/${type}/`)
        .setPublicPath(`/build/bitbag/${pluginName}/${type}/`)
        .addEntry(`bitbag-${pluginName}-${type}`, path.resolve(__dirname, `./src/Resources/assets/${type}/entry.js`))
        .addStyleEntry(`bitbag-${pluginName}-${type}-css`, path.resolve(__dirname, `./src/Resources/assets/${type}/css/media.css`))
        .enableStimulusBridge(path.resolve(__dirname, `./src/Resources/assets/${type}/js/controllers.json`))
        .disableSingleRuntimeChunk()
        .cleanupOutputBeforeBuild()
        .enableSourceMaps(!Encore.isProduction())
        .enableSassLoader();

    const config = Encore.getWebpackConfig();
    config.name = `bitbag-${pluginName}-${type}`;

    return config;
}

const adminConfig = getConfig(pluginName, 'admin')

module.exports = [adminConfig];
