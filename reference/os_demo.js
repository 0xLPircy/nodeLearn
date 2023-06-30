const os = require('os');

// Platform - darwin
console.log(os.platform());

// Cpu Architecture - x64
console.log(os.arch());

// cpu core info - object with all cores
console.log(os.cpus());

// free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// home directory - /Users/L_Pircy
console.log(os.homedir());

// uptime
console.log(os.uptime());