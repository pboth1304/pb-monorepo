module.exports = {
  name: 'search-engine',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/search-engine',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
