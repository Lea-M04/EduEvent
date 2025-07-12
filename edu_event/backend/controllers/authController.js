const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath));
}

function writeUsers(data) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
}

exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        field: user.field,
        interests: user.interests
      }
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

exports.register = (req, res) => {
  const { username, password, first_name, last_name, field, interests } = req.body;
  const users = readUsers();

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  const newUser = {
    id: users.length + 1,
    username,
    password,
    first_name,
    last_name,
    field,
    interests: Array.isArray(interests)
      ? interests
      : typeof interests === 'string'
      ? interests.split(',').map(i => i.trim())
      : []
  };

  users.push(newUser);
  writeUsers(users);

  res.json({
    success: true,
    user: {
      id: newUser.id,
      username: newUser.username,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      field: newUser.field,
      interests: newUser.interests
    }
  });
};
