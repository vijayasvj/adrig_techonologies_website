# Adrig Technologies 

## Code Formatting with Prettier and Husky

This guide helps you set up Prettier and Husky to ensure code is formatted before every Git push.

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

1. **Install Prettier**:

   ```sh
   npm install --save-dev prettier
   ```

2. **Install Husky**:

   ```sh
   npm install --save-dev husky
   ```

3. **Enable Husky Git hooks**:

   ```sh
   npx husky install
   ```

4. **Add a pre-commit hook**:

   ```sh
   npx husky add .husky/pre-commit "npx prettier --write ."
   ```

### Usage

With this setup, Prettier will automatically format your code before each commit.

For more information, visit the [Prettier](https://prettier.io) and [Husky](https://typicode.github.io/husky) documentation.

```

This `README.md` provides a concise guide to setting up Prettier and Husky for your project, ensuring code is formatted before commits.
```