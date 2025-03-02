# my-notes

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Issues with Ubuntu 24
To solve the issue with the new restrictions for AppImage apps, which restricts the use of sandboxes.
`sudo chown root ./node_modules/electron/dist/chrome-sandbox && sudo chmod 4755 ./node_modules/electron/dist/chrome-sandbox`