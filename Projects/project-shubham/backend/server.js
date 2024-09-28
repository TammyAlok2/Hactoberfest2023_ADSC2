const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const usersFilePath = 'users.json';

// Function to read users from file
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Function to write users to file
const writeUsersToFile = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const users = readUsersFromFile();

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  // Add the new user to the list
  users.push({ username, password });
  writeUsersToFile(users);

  res.status(201).json({ message: 'Registration successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const users = readUsersFromFile();

  // Check if the username and password match
  const user = users.find((user) => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
