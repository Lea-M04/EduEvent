const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

function readUsers() {
  return JSON.parse(fs.readFileSync(usersPath));
}

exports.getAllUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

exports.getUsersByField = (req, res) => {
  const { field } = req.params;
  const users = readUsers();
  const filtered = users.filter(u => u.field === field);
  res.json(filtered);
};
