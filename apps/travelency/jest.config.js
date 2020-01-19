module.exports = {
  name: 'travelency',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/travelency',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
