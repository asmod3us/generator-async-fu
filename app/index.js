'use strict';

var yeoman = require('yeoman-generator');
var shell = require('shelljs');

var AsyncFuGenerator = yeoman.generators.Base.extend({
  tpl: function() {
    this.template('_liftoffrc', '.liftoffrc');
  },

  useTpl: function() {
    shell.exec('ls -l .liftoffrc');
  }

});

module.exports = AsyncFuGenerator;
