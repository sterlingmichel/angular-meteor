Package.describe({
  name: 'angular-compilers',
  version: '1.0.1',
  summary: 'Rollup, AOT, SCSS, HTML and TypeScript compilers for Angular Meteor',
  git: 'https://github.com/sterlingmichel/angular-meteor/edit/master/atmosphere-packages/angular-compilers',
  documentation: 'README.md',
  enhance: "Sterling Michel"
});

Package.registerBuildPlugin({
  name: 'Angular Compilers',
  sources: [
    'plugin/register.js'
  ],
  use: [
    // Uses an external packages to get the actual compilers
    'ecmascript@0.10.5',
    'angular-typescript-compiler@0.3.2',
    'angular-html-compiler@0.3.2',
    'angular-scss-compiler@0.3.2'
  ]
});

Package.onUse(function (api) {
  api.versionsFrom('1.6.1');

  // Required in order to register plugins
  api.use('isobuild:compiler-plugin@1.0.0');
});
