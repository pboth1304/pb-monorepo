module.exports = {
  name: 'travelency',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/travelency',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
