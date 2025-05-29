const express = require('express');
const cors = require('cors');
const runPlaywrightTask = require('./script');

const app = express();
const PORT = 4000;

// Enable CORS for your React frontend
app.use(cors());
app.use(express.json());

// Endpoint to run the Playwright automation
app.post('/run-automation', async (req, res) => {
  try {
    console.log('Received automation request');
    const result = await runPlaywrightTask();
    res.json(result);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Error running automation',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 