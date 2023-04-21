// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// time yarn add --dev karma-jasmine karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter karma-firefox-launcher karma-jasmine-html-reporter karma-spec-reporter karma-verbose-reporter karma-htmlfile-reporter

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-verbose-reporter'),
      require('karma-spec-reporter'),
      require('karma-htmlfile-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    htmlReporter: {
      outputFile: 'docs/tests/index.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'for Angular project',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: false,
      showOnlyFailed: false
    },
    reporters: ['progress', 'kjhtml', 'verbose', 'spec', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['FirefoxHeadless'],
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [ '-headless' ],
      },
    },
    singleRun: true,
    restartOnFileChange: true
  });
};
