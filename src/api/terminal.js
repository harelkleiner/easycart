const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.post('/terminal', (req, res) => {
  const { command, is_background, explanation } = req.body;

  if (!command) {
    return res.status(400).json({ message: 'Command is required' });
  }

  try {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return res.status(500).json({ message: error.message });
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      res.status(200).json({ message: 'Command executed successfully', output: stdout });
    });
  } catch (error) {
    console.error('Error executing command:', error);
    res.status(500).json({ message: 'Failed to execute command' });
  }
});

app.listen(port, () => {
  console.log(`Terminal API server running at http://localhost:${port}`);
}); 