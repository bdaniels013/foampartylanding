# Deployment Guide

This guide will help you deploy your high-converting landing page to various platforms.

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your local repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"
6. Your site will be live in minutes!

## Option 2: Deploy to Netlify

### Step 1: Build the project
```bash
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag and drop the `dist/` folder to the deploy area
3. Your site will be live instantly!

### Step 3: Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Option 3: Deploy to GitHub Pages

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Select "Deploy from a branch"
4. Choose "main" branch and "/docs" folder
5. Click "Save"

### Step 3: Build and Deploy
```bash
npm run build
cp -r dist docs
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

## Option 4: Deploy to Any Static Hosting

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload
Upload the contents of the `dist/` folder to your hosting provider's web root directory.

## Troubleshooting

### Common Issues

1. **Blank page on deployment**
   - Check that your hosting provider supports SPA routing
   - Ensure all asset paths are relative (they should be with our config)

2. **Assets not loading**
   - Verify the `dist/` folder contains all files
   - Check that asset paths in `dist/index.html` start with `./`

3. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run build`

### Testing Locally

Before deploying, test your production build locally:
```bash
npm run build
npm run preview
```

## Performance Optimization

Your build is already optimized with:
- ✅ Code splitting
- ✅ Asset compression
- ✅ Tree shaking
- ✅ Modern JavaScript (ESNext)

## Analytics and Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics (if using Vercel)
- Performance monitoring tools

## SSL and Security

- Vercel and Netlify provide free SSL certificates
- GitHub Pages uses HTTPS by default
- Ensure your custom domain has SSL enabled

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Test locally with `npm run preview`
4. Check the deployment platform's logs
