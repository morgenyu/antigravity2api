import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const instructionPath = path.join(__dirname, 'system_instruction.txt');
let SYSTEM_INSTRUCTION = '';

try {
  if (fs.existsSync(instructionPath)) {
    SYSTEM_INSTRUCTION = fs.readFileSync(instructionPath, 'utf8');
  }
} catch (error) {
  console.error('Error reading system instruction file:', error);
}

export default SYSTEM_INSTRUCTION;