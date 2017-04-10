
//获取  require-dir 模块将任务分离到多个文件
var requireDir = require('require-dir');
//获取 任务路径
var dir = requireDir('./gulp/tasks', { recurse: true});
