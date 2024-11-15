# RepoPrompt Web

This is the official website for Repo Prompt, a powerful macOS application that leverages AI for seamless file management and code modifications.

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd RepoPromptWeb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The site will be available at `http://localhost:3000`

## Project Structure

```
RepoPromptWeb/
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── index.html       # HTML entry point
├── src/
│   ├── components/      # React components
│   ├── styles/          # Global styles
│   ├── App.js           # Main application component
│   └── index.js         # Application entry point
```

### Key Components

- `Hero.js` - Landing page hero section
- `Features.js` - Product features showcase
- `Screenshots.js` - Application screenshots carousel
- `Demo.js` - Product demo section
- `ThemeSwitcher.js` - Dark/light mode toggle

## Technology Stack

- React 18
- Tailwind CSS
- Ant Design Components
- React Icons
- React Player

## Development

### Available Scripts

- `npm start` - Runs development server
- `npm test` - Executes test suite
- `npm run build` - Creates production build

### Styling

The project uses a combination of:
- Tailwind CSS for utility classes
- CSS modules for component-specific styles
- Ant Design components for UI elements

### Theme Support

The website supports both light and dark themes, with automatic system preference detection and manual toggle capability.

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. The optimized files will be in the `build` directory

## Deployment

The static website can be deployed to various platforms:

### GitHub Pages
1. Update `package.json` with your repository name
2. Run `npm run build`
3. Deploy using GitHub Pages settings

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect React configuration
3. Deploy with default settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project uses a dual license:
- Code is licensed under the Apache 2.0 License
- Brand assets, logos, and marketing materials are All Rights Reserved

See [LICENSE.md](LICENSE)
