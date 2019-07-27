module.exports = {
  name: 'admin-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/admin-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
