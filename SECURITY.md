# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of first-model seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Publicly Disclose

Please do not open a public issue for security vulnerabilities.

### 2. Report Privately

Send an email to the maintainers or open a private security advisory on GitHub with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### 3. What to Expect

- **Acknowledgment**: We'll acknowledge receipt within 48 hours
- **Updates**: We'll provide updates on our investigation
- **Timeline**: We aim to patch critical vulnerabilities within 7 days
- **Credit**: We'll credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

When using this project:

### API Keys

- **Never commit API keys** to version control
- Store keys in `.env` file (already in `.gitignore`)
- Use environment variables in production
- Rotate keys regularly

### Server Security

- Keep dependencies updated (`npm audit`)
- Use HTTPS in production
- Implement rate limiting
- Validate all inputs
- Use secure headers (helmet.js)

### Example Secure Setup

```javascript
// Install security packages
npm install helmet express-rate-limit

// In your server.js
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## Known Security Considerations

### API Key Exposure

This application requires API keys for OpenAI and Groq. Ensure these are:
- Stored in environment variables
- Never committed to Git
- Kept confidential

### Input Validation

Always validate user inputs before sending to AI models to prevent:
- Injection attacks
- Excessive token usage
- Malicious prompts

### Rate Limiting

Implement rate limiting to prevent:
- API quota exhaustion
- DDoS attacks
- Cost overruns

## Dependencies

We regularly update dependencies to address security vulnerabilities. Run:

```bash
npm audit
npm audit fix
```

## Security Updates

Subscribe to security advisories:
- Watch this repository for security updates
- Check GitHub Security Advisories
- Monitor OpenAI and Groq security announcements

## Questions?

For questions about security that don't involve vulnerabilities, open a regular issue.

---

Thank you for helping keep first-model secure!