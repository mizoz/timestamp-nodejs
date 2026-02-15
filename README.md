# Timestamp Node.js

[![npm Version](https://img.shields.io/npm/v/timestamp-nodejs?style=flat-square)](https://www.npmjs.com/package/timestamp-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/timestamp-nodejs?style=flat-square)](https://www.npmjs.com/package/timestamp-nodejs)
[![License](https://img.shields.io/npm/l/timestamp-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/timestamp-nodejs?style=flat-square)](https://www.npmjs.com/package/timestamp-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/timestamp-nodejs?style=flat-square)](https://github.com/mizoz/timestamp-nodejs)

> A Node.js CLI tool for working with timestamps and date/time conversions.

## Features

- Convert timestamps to human-readable dates
- Convert dates to timestamps
- Get current timestamp
- Multiple format support
- Timezone conversions
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g timestamp-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/timestamp-nodejs.git
cd timestamp-nodejs
npm install
```

## Usage

### Command Line

```bash
# Get current timestamp
timestamp now

# Convert timestamp to date
timestamp to-date 1704067200

# Convert date to timestamp
timestamp to-timestamp "2024-01-01"
```

### JavaScript API

```javascript
const { TimestampTool } = require("timestamp-nodejs");

const tool = new TimestampTool();

// Get current timestamp
const now = tool.now();
console.log(now);

// Convert to date
const date = tool.toDate(1704067200);
console.log(date);
```

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
