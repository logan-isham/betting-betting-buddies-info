
# Deployment Guide for BallerBets

This guide provides instructions for deploying BallerBets to various platforms.

## GitHub Pages Deployment

1. Install the gh-pages package:
```sh
npm install --save-dev gh-pages
```

2. Add the following scripts to your `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Add a homepage field to your `package.json`:
```json
"homepage": "https://yourusername.github.io/ballerbets"
```

4. Deploy the application:
```sh
npm run deploy
```

## Netlify Deployment

1. Create a `netlify.toml` file in the root directory with the following content:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Push your repository to GitHub.

3. Log in to Netlify and click "New site from Git".

4. Choose GitHub and select your repository.

5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site".

## Vercel Deployment

1. Push your repository to GitHub.

2. Log in to Vercel and click "New Project".

3. Import your repository from GitHub.

4. Configure the project:
   - Framework Preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

5. Click "Deploy".

