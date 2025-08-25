const fs = require('fs');
const path = require('path');

// Create out directory if it doesn't exist
if (!fs.existsSync('out')) {
  fs.mkdirSync('out');
}

// Copy public files to out
if (fs.existsSync('public')) {
  fs.cpSync('public', 'out', { recursive: true });
}

console.log('Static files prepared for deployment');