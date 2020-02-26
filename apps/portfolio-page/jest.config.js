module.exports = {
  name: 'portfolio-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/portfolio-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
