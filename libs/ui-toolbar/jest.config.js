module.exports = {
  name: 'ui-toolbar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-toolbar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
