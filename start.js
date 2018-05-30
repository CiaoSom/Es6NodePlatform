/*
* @Author: jinsong5@
* @Date:   2018-05-30 14:56:36
* @Last Modified by:   jinsong5@
* @Last Modified time: 2018-05-30 15:03:30
*/
require('babel-core/register')({
  'presets': [
    'stage-3',
    'latest-node'
  ]
})
require('babel-polyfill')
require('./app')