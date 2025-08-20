const fs = require('fs');
const os = require('os');
const path = require('path');
const { URL } = require('url');

function lFN_systemLogGenerator(){
// === 1. Get System Info ===
const systemInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    totalMemoryGB: (os.totalmem() / (1024 ** 3)).toFixed(2),
    freeMemoryGB: (os.freemem() / (1024 ** 3)).toFixed(2)
};

// === 2. Parse URL and extract query params ===
const myURL = new URL('https://mysite.com/api/products?category=laptop&id=999');
const queryParams = {
    category: myURL.searchParams.get('category'),
    id: myURL.searchParams.get('id')
};

// === 3. Prepare log content with timestamp ===
const timestamp = new Date().toISOString();
const logEntry = `
=== Log Entry: ${timestamp} ===
System Info:
  Platform       : ${systemInfo.platform}
  Architecture   : ${systemInfo.architecture}
  Total Memory   : ${systemInfo.totalMemoryGB} GB
  Free Memory    : ${systemInfo.freeMemoryGB} GB

URL Info:
  Full URL       : ${myURL.href}
  Category       : ${queryParams.category}
  ID             : ${queryParams.id}

------------------------------
`;

// === 4. Create logs directory if it doesn't exist ===
const logDir = path.join(__dirname, 'logs');
const logFilePath = path.join(logDir, 'system_log.txt');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// === 5. Append log entry to the file ===
fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
        console.error('❌ Error writing to log file:', err);
    } else {
        console.log('✅ Log entry added successfully.');
    }
});

}


module.exports = lFN_systemLogGenerator