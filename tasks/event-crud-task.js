
// Mini Project: User Registration with Events
// We’ll simulate a user registration system using events.
// Requirements:
// Create an event emitter for "userRegistered".
// Listener 1 → Save user data into a file (users.txt).
// Listener 2 → Send (log) a welcome email.
// Listener 3 → Log "New user registered: <username>".
// Create another event "userDeleted".
// Listener should log "User <username> deleted".
// Test it by emitting "userRegistered" and "userDeleted".

let events = require('events')
let EventEmitter = new events.EventEmitter();
let fs = require('fs')
let l_path = 'D:\\ankit\\2025\\node-where\\users.txt'

// Listener 1: Save user to file (only if not exists)
EventEmitter.on('userRegistered', (argu) => {
    let exists = false; // must declare, otherwise it will throw reference error
    fs.readFile(l_path, 'utf8', (err, resp) => {
        if (!err && resp) {
            const lines = resp.split('\n');
            for (let line of lines) {
                if (line.trim() === '') continue;
                try {
                    const user = JSON.parse(line);
                    if (user.userid === argu.userid) {
                        exists = true;
                        break;
                    }
                } catch { }
            }
        }

        if (exists) {
            console.warn(`⚠️ User with ID ${argu.userid} already exists. Skipping registration.`);
        } else {
            fs.appendFile(l_path, JSON.stringify(argu) + '\n', (err) => {
                if (err) {
                    console.warn('❌ Error while writing');
                } else {
                    console.warn('✅ File write successful');
                }
            })
        }
    })
})

// Listener 2: Show welcome message
EventEmitter.on('userRegistered', (argu) => {
    console.warn('👋 Welcome ' + argu.name);
})

// Listener 3: Log new registration
EventEmitter.on('userRegistered', (argu) => {
    console.warn(`📝 New user registered: ${argu.name} (UserId: ${argu.userid})`);
})

let l_RegisteredAt = new Date().toLocaleString()
let l_user_details = { name: 'Amba', userid: 370, password: "0009", RegisteredAt: l_RegisteredAt }
EventEmitter.emit('userRegistered', l_user_details)

// Event to read all users
EventEmitter.on('readusers', () => {
    fs.readFile(l_path, 'utf8', (err, resp) => {
        if (err) {
            console.warn('Error while reading file');
        } else {
            const lines = resp.split('\n');
            console.warn("📋 Registered Users:");
            for (let line of lines) {
                if (line.trim() === '') continue;
                try {
                    const user = JSON.parse(line);
                    console.warn(` - ${user.name} (UserId: ${user.userid})`);
                } catch (e) {
                    console.error('Invalid JSON line:', line);
                }
            }
        }
    })
})

EventEmitter.emit('readusers')

// Event to delete a user by UserId
EventEmitter.on('deleteuser', (UserId) => {
    fs.readFile(l_path, 'utf8', (err, res) => {
        if (err) {
            console.warn('Error while reading delete file');
        } else {
            const lines = res.split('\n');
            let deletedUser = null;

            // filter out user
            let liness = lines.filter((l_row_lines) => {
                if (l_row_lines.trim() === '') return false;
                try {
                    const user = JSON.parse(l_row_lines);
                    if (user.userid === UserId) {
                        deletedUser = user;
                        return false; // skip this one
                    }
                    return true;
                } catch {
                    return false;
                }
            });

            if (deletedUser) {
                fs.writeFile(l_path, liness.join('\n') + '\n', (err) => {
                    if (err) console.warn("❌ Error updating file");
                    else console.warn(`🗑️ User ${deletedUser.name} (UserId: ${UserId}) deleted`);
                });
            } else {
                console.warn(`⚠️ No user found with ID ${UserId}`);
            }
        }
    })
})

EventEmitter.emit('deleteuser', 370);  // test delete
