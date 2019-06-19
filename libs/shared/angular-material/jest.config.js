module.exports = {
  name: 'shared-angular-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/angular-material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
