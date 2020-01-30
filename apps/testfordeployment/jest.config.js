module.exports = {
  name: 'testfordeployment',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/testfordeployment',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
