import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Allow all origins - for development purposes only
// In production, replace '*' with your actual origin, e.g., 'http://localhost:5173'
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
