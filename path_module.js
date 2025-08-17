let path = require('path')

let a = path.basename('/foo/bar/baz/asdf/quux.html');
let a1 = path.dirname('/foo/bar/baz/asdf/quux.html');
let a2 = path.extname(__filename);
let a3 = path.extname(__dirname);

console.warn('path',a)
console.warn('path a1',a1)
console.warn('path a2',a2)
console.warn('extname a3',a3)