'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PixiGenerator = module.exports = function PixiGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PixiGenerator, yeoman.generators.Base);

PixiGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What do you want to call your project?',
    'default': 'pixi-project'
  }, {
    name: 'version',
    message: 'The default version of the project',
    'default': '1.0.0'
  }];

  this.prompt(prompts, function(props) {
    this.projectName = props.projectName;
    this.version = props.version;

    cb();
  }.bind(this));
};

PixiGenerator.prototype.app = function app() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('gruntfile.js', 'gruntfile.js');
  this.copy('_index.html', 'index.html');
  
  this.directory('files', '.');
};

PixiGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
