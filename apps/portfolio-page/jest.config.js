module.exports = {
  name: 'portfolio-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/portfolio-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
