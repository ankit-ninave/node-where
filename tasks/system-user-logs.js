const path = require('path');
const os = require('os');
const fs = require('fs');

function lFN_SystemAndUserLogsGenrate() {
  // OS Info
  let l_Platform = os.platform();
  let l_Arch = os.arch();
  let l_total_memory = Math.round(os.totalmem() / (1024 ** 3)) + ' GB';
  let l_free_memory = Math.round(os.freemem() / (1024 ** 3)) + ' GB';

//   console.warn('Platform :', l_Platform);
//   console.warn('Arch :', l_Arch);
//   console.warn('Total Memory :', l_total_memory);
//   console.warn('Free Memory :', l_free_memory);

  // File Info
  let l_SystemFilePath = 'D:\\ankit\\2025\\node-where\\java_the_world\\readmi.txt';
  let l_DirectoryName = path.dirname(l_SystemFilePath);
  let l_PathBaseName = path.basename(l_SystemFilePath);
  let l_Extension = path.extname(l_SystemFilePath);
  let l_SystemInfo = {
    Platform: l_Platform,
    Architecture: l_Arch,
    TotalMemory: l_total_memory,
    FreeMemory: l_free_memory,
    DirectoryName: l_DirectoryName,
    PathBaseName: l_PathBaseName,
    Extension: l_Extension,
  };

//   console.warn('DirectoryName : ', l_DirectoryName);
//   console.warn('PathBaseName : ', l_PathBaseName);
//   console.warn('Extension : ', l_Extension);

  // Ensure logs directory exists
  const logDir = path.join(__dirname, '../logs');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  // File path
  const logFilePath = path.join(logDir, 'system-user-info.txt');

  // Write system info
  fs.writeFile(logFilePath, JSON.stringify(l_SystemInfo, null, 2) + '\n', (err) => {
    if (err) {
      console.warn('Error while creating file and adding data');
    } else {
      console.warn('File write completed successfully');

      // Read file
      fs.readFile(logFilePath, 'utf8', (err, res) => {
        if (err) {
          console.warn('Error while reading file');
        } else {
          console.warn('File read successfully:\n', res);

          // Now safely append the URL data
          const l_URL = new URL('https://myapp.com/dashboard?user=ankit&id=2025');
          const user = l_URL.searchParams.get('user');
          const id = l_URL.searchParams.get('id');
          const AppendWithUrl = { user, id };

          console.warn(AppendWithUrl);

          fs.appendFile(
            logFilePath,
            '\n' + JSON.stringify(AppendWithUrl, null, 2) + '\n',
            (err) => {
              if (err) {
                console.warn('Error while appending URL data');
              } else {
                console.warn('URL data appended successfully');
              }
            }
          );
        }
      });
    }
  });
}

module.exports = lFN_SystemAndUserLogsGenrate;
