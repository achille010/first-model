
<div align="center">
<img src="https://skillicons.dev/icons?i=js,express,nodejs&theme=dark&perline=3" />

**Built with JavaScript, Express, and Node.js**
# first-model
</div>

My first AI model integration using OpenAI library with Express.js server.

## Overview

This project is my first hands-on experience building a web application that integrates AI models through the OpenAI library and Groq API. It demonstrates how to set up an Express.js server that communicates with AI models to process requests and generate responses.

## Features

- **Express.js Server**: RESTful API built with Express
- **OpenAI Integration**: Leverages OpenAI's powerful language models
- **Groq API Support**: Alternative AI model provider integration
- **Modular Architecture**: Organized component structure for scalability
- **API Endpoints**: Clean and simple endpoints for AI interactions

## Project Structure

```
first-model/
├── components/          # Modular components
├── index.js            # Main entry point
├── server.js           # Express server configuration
├── package.json        # Dependencies and scripts
├── package-lock.json   # Locked dependency versions
└── .gitignore         # Git ignore rules
```

## Prerequisites

Before running this project, ensure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- OpenAI API key
- Groq API key (optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/achille010/first-model.git
cd first-model
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
OPENAI_API_KEY=your_openai_api_key_here
GROQ_API_KEY=your_groq_api_key_here
PORT=3000
```

## Usage

### Starting the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3000` (or your configured PORT).

### Making API Requests

Example request using curl:
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

Example using JavaScript fetch:
```javascript
fetch('http://localhost:3000/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Tell me a joke'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **OpenAI API**: AI language model integration
- **Groq API**: Alternative AI model provider

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Security

For security vulnerabilities, see [SECURITY.md](SECURITY.md) for reporting instructions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built as a learning project to explore AI model integration with Express.js*### Hello World in TypeScript with TSX

#### Using Styled Components

You will need to install the required packages:
```bash
npm install styled-components

```

Then, create a new file `HelloWorld.tsx`:

```tsx
import styled from 'styled-components';

const Container = styled.div
`color: blue;
 font-size: 24px;
 font-weight: bold;
`;

const HelloWorld = () => {
    return (
        <Container>Hello World!</Container>
    );
};

export default HelloWorld;

```

#### Using CSS Modules

You will need to create a new file `HelloWorld.tsx`:

```tsx\nimport styles from './styles.module.css';

const HelloWorld = () => {
    return (
        <div className={styles.container}>Hello World!</div>
    );
};

export default HelloWorld;
```
And then create a new file `styles.module.css`:

```css
.container {
  color: blue;
  font-size: 24px;
  font-weight: bold;
}
```
#### Using Inline Styles

You will need to create a new file `HelloWorld.tsx`:
```tsx
const HelloWorld = () => {
    return (
        <div style={{
            color: 'blue',
            fontSize: '24px',
            fontWeight: 'bold'
        }}> Hello World! </div>
    );
};
    
export default HelloWorld;
```
You can choose the method that best fits your needs.


