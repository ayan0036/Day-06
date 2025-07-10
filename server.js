 // server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const students = [
  { id: 1, name: 'Rahul', age: 20, course: 'Node.js' },
  { id: 2, name: 'Aisha', age: 22, course: 'React' },
  { id: 3, name: 'Vikram', age: 19, course: 'Python' }
];

// GET route
app.get('/students', (req, res) => {
  res.json(students);
});

// POST route
app.post('/add-student', (req, res) => {
  const { name, age, course } = req.body;
  console.log("Naya student:", { name, age, course });
  res.json({ message: "Student added!", data: { name, age, course } });
});

app.listen(PORT, () => {
  console.log(`✅ Server chal raha hai at http://localhost:${PORT}`);
});
