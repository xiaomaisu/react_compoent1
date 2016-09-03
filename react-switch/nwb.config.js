module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSwitch',
      externals: {
        react: 'React'
      }
    }
  },
  webpack:{
    html: {
      mountId: 'root',
      title: 'suoluo ReactSwitch'
    },
    install:{
      dev: true,
      peerDependencies: true
    }
  },
  karma:{
    testContext: 'tests.webpack.js',
    plugins: [
      require('karma-chai'),
      require('karma-spec-reporter')
    ],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec']
  }
}
