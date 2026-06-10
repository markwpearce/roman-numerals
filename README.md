# Roman Numeral Converter

A modern, modular JavaScript project for converting integers into Roman numerals. It features a data-driven conversion engine that supports standard Roman numerals and large values using Unicode overline notation.

## Features

*   **Modern JavaScript:** Built with ES6+ syntax and modular design.
*   **Data-Driven:** Easily configurable mapping for numeral conversion.
*   **Large Number Support:** Uses Unicode combining overlines (`\u0305`) to represent higher magnitudes (e.g., thousands, millions).
*   **Dual-Environment:** Compatible with Node.js (via CommonJS) and modern browsers (via ES Modules).
*   **Self-Contained Demo:** Includes a responsive `demo.html` for real-time conversion in the browser.

## Examples

The converter handles both standard Roman numerals and large values:

| Integer | Roman Numeral |
| :--- | :--- |
| 1 | I |
| 4 | IV |
| 9 | IX |
| 40 | XL |
| 99 | XCIX |
| 500 | D |
| 65,535 | L̅X̅V̅DXXXV |

## Project Structure

```text
roman-numerals/
├── demo.html             # Browser-based demo interface
├── package.json          # Project configuration and dependencies
├── src/
│   ├── roman-numerals.js       # Core conversion logic
│   └── roman-numerals.spec.js  # Mocha-based test suite
└── node_modules/         # Installed dependencies
```

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

This project uses [Mocha](https://mochajs.org/) as the test runner.

```bash
npm test
```

### Running the Demo

To run the browser demo without CORS issues, serve the project using the included script:

1. Start the local server:
   ```bash
   npm run demo
   ```
2. Open your browser and navigate to: `http://localhost:3000/demo.html`

## License

ISC
