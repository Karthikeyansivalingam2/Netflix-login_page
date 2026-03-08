const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MOCK_USER = {
    email: 'karthi@gmail.com',
    password: '123',
    name: 'Karthi'
};

app.get('/', (req, res) => {
    res.send('✅ Netflix Backend API is successfully running!');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        return res.status(200).json({ success: true, message: 'Login successful', userName: MOCK_USER.name });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
