'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
// var yosay = require('yosay');
var slug = require('slug');
var npmconf = require('npmconf');
var latest = require('latest-version');
var async = require('async');
var fs = require('fs');
var camelcase = require('camelcase');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    function toComponentCase(str) {
      var camel = camelcase( slug(str).replace('vdom-', '') );
      var c = camel.charAt(0).toUpperCase() + camel.slice(1);
      return c;
    }

    var prompts = [
    {
      type: 'input',
      name: 'appName',
      message: 'Project name (human style): ',
      default: this.appname
    },
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name (camel style): ',
      default: toComponentCase(this.appname)
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description: '
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.description = props.description;
      this.appNameSlug = slug(props.appName);
      this.componentName = toComponentCase(this.appNameSlug);
      this.mainFile = this.componentName+'.js';
      done();
    }.bind(this));
  },


  writing: {
    app: function () {

      // easier without template
      var pkg = require('./templates/_package.json');
      pkg.name = this.appNameSlug;
      pkg.description = this.description;
      pkg.main = this.mainFile;
      pkg.browserify.transform = [];
      pkg.author = 'Nick Thomas' + ' <'+'nichoth@gmail.com'+'>';
      pkg.repository.url = pkg.repository.url+
        'nichoth/'+
        this.appNameSlug+'.git'
      ;
      pkg.scripts.server = 'node server.js';
      pkg.keywords = [
        'virtual-dom',
        'mercury',
        'ui',
        'component'
      ];
      fs.writeFile(
        this.destinationPath('package.json'),
        JSON.stringify(pkg, null, 2)
      );

      this.fs.copyTpl(
        this.templatePath('example/_index.html'),
        this.destinationPath('example/index.html'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('example/_example.js'),
        this.destinationPath('example/example.js'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('_readme.md'),
        this.destinationPath('readme.md'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('_server.js'),
        this.destinationPath('server.js'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath(this.mainFile),
        this
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    }
  },

  install: function () {
    this.npmInstall(['ecstatic', 'main-loop'], {saveDev: true});
    this.npmInstall(['virtual-dom', '@nichoth/state'], {save: true});
  }
});
