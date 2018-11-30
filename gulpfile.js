'use strict';

var gulp = require('gulp');
var ozbcoreTasks = require('ozbcore-build');

ozbcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
