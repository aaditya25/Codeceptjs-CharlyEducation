const { setHeadlessWhen } = require('@codeceptjs/configure');
const { browser } = require('globalthis/implementation');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://app.stage.charly.education/',
      show: true,
      browser: 'chrome',
      // browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    printpage: './pages/printpage.js',
    workspace: './pages/workspace.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output"
    }
  },
  name: 'codeceptjs-webdriverio',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
      // additional config for service can be passed here
    },
    allure: {
      "enabled": true
    }
  }
}