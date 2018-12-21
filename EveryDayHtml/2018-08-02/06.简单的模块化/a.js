// require是用来加载模块的  模块包括核心模块，自己编写的文件模块 
// node中只有模块域，没有全局作用域   内部访问不到外部，外部访问不到内部
console.log('a start');

require('./b.js')

console.log('a end');