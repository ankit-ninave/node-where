const os = require('os')

// console.warn('os',os.freemem())
// console.warn('os',os.homedir())
// console.warn('os',os.hostname())
// console.warn('os',os.platform())
// console.warn('os',os.release())
// console.warn('os',os.uptime())
// console.warn('os',os.tmpdir())
// console.warn('os',os.totalmem())
// console.warn('os',os.userInfo())
// console.warn('os',os.type())


console.warn('os.platform()',os.platform());
console.warn('os.totalmem()',os.totalmem() / (1024 * 1024 * 1024));
console.warn('os.freemem()',os.freemem() / (1024 * 1024 * 1024));

