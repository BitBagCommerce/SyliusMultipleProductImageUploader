const Encore = require('@symfony/webpack-encore');
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

const syliusBundles = path.resolve(__dirname, 'vendor/sylius/sylius/src/Sylius/Bundle/');
const uiBundleScripts = path.resolve(syliusBundles, 'UiBundle/Resources/private/js/');
const uiBundleResources = path.resolve(syliusBundles, 'UiBundle/Resources/private/');

// Admin config
Encore
  .setOutputPath('public/build/admin/')
  .setPublicPath('/build/admin')
  .addEntry('image-uploader-entry', './assets/admin/js/entry.js')
  .addStyleEntry('image-uploader-style-entry', './assets/admin/css/media.css')
  .enableStimulusBridge('./assets/admin/js/controllers.json')
  .disableSingleRuntimeChunk()
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableSassLoader()
  .enableIntegrityHashes(Encore.isProduction());

const adminConfig = Encore.getWebpackConfig();

adminConfig.resolve.alias['sylius/ui'] = uiBundleScripts;
adminConfig.resolve.alias['sylius/ui-resources'] = uiBundleResources;
adminConfig.resolve.alias['sylius/bundle'] = syliusBundles;
adminConfig.externals = Object.assign({}, adminConfig.externals, { window: 'window', document: 'document' });
adminConfig.name = 'admin';

module.exports = [adminConfig];
