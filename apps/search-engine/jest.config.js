module.exports = {
  name: 'search-engine',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/search-engine',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
