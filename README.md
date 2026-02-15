# Timestamp Node.js

A command-line tool for working with timestamps and date/time conversions.

## Features

- Convert timestamps to human-readable dates
- Convert dates to timestamps
- Multiple format support (ISO, Unix, custom)
- Current timestamp display
- Timezone conversions
- Relative time calculations

## Installation

```bash
npm install -g timestamp-nodejs
```

Or clone and install:

```bash
git clone https://github.com/mizoz/timestamp-nodejs.git
cd timestamp-nodejs
npm install
```

## Usage

```bash
# Get current timestamp
timestamp now

# Convert timestamp to date
timestamp convert 1699900000

# Convert date to timestamp
timestamp convert "2024-01-01"

# Unix timestamp to date
timestamp unix 1699900000

# Relative time
timestamp relative "2024-01-01"
```

## Options

- `now` - Get current timestamp
- `convert <value>` - Convert between formats
- `unix <timestamp>` - Convert Unix timestamp
- `relative <date>` - Show relative time

## License

MIT License

## Author

mizoz
