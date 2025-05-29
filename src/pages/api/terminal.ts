import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
} 