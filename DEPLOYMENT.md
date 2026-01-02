# Deployment Guide

This guide covers multiple ways to deploy and publish your Souq Digital application.

## 🚀 Option 1: GitHub Pages (Recommended - Already Set Up!)

Your repository is already configured for automatic deployment via GitHub Actions.

### Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository: `https://github.com/Ultimate-Coding/traditional-souq`
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Automatic Deployment:**
   - Every time you push to the `main` branch, GitHub Actions will automatically:
     - Build your project
     - Deploy it to GitHub Pages
   - Your site will be available at: `https://ultimate-coding.github.io/traditional-souq/`

3. **Manual Trigger (if needed):**
   - Go to **Actions** tab in your repository
   - Select the "Deploy to GitHub Pages" workflow
   - Click **Run workflow**

### Note:
The `vite.config.ts` is configured with `base: '/traditional-souq/'` to match your repository name. If you change the repo name, update this value.

---

## 🌐 Option 2: Vercel (Easiest & Fastest)

Vercel is excellent for React applications and offers free hosting with automatic deployments.

### Steps:

1. **Sign up/Login:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project:**
   - Click **Add New Project**
   - Import your `traditional-souq` repository
   - Vercel will auto-detect Vite settings

3. **Deploy:**
   - Click **Deploy** (no configuration needed)
   - Your site will be live in seconds!

4. **Automatic Updates:**
   - Every push to `main` automatically triggers a new deployment
   - You'll get a custom domain like: `traditional-souq.vercel.app`

### Benefits:
- ✅ Free custom domain
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments for PRs

---

## 📦 Option 3: Netlify

Similar to Vercel, Netlify offers easy deployment for static sites.

### Steps:

1. **Sign up/Login:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Deploy:**
   - Click **Add new site** → **Import an existing project**
   - Select your `traditional-souq` repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click **Deploy site**

3. **Automatic Updates:**
   - Every push to `main` automatically deploys
   - You'll get: `traditional-souq.netlify.app`

### Benefits:
- ✅ Free tier with generous limits
- ✅ Custom domain support
- ✅ Form handling
- ✅ Split testing

---

## 🔧 Option 4: Manual Deployment

If you prefer to deploy manually to any static hosting service:

### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder:**
   - The `dist` folder contains all production-ready files
   - Upload the entire `dist` folder contents to your hosting service

### Hosting Services that accept manual uploads:
- GitHub Pages (via drag & drop)
- Firebase Hosting
- AWS S3 + CloudFront
- Any web hosting service with FTP

---

## 🔄 Updating Your Deployment

### For GitHub Pages (Automatic):
- Just push to `main` branch - deployment happens automatically!

### For Vercel/Netlify (Automatic):
- Push to `main` branch - they auto-detect and deploy

### For Manual:
- Run `npm run build` again
- Upload the new `dist` folder

---

## 📝 Important Notes

1. **Base Path Configuration:**
   - For GitHub Pages: `base: '/traditional-souq/'` (already configured)
   - For Vercel/Netlify: Change to `base: '/'` in `vite.config.ts`

2. **Environment Variables:**
   - If you add environment variables later, configure them in your hosting platform's settings

3. **Custom Domain:**
   - All platforms support custom domains
   - Follow their documentation for DNS configuration

---

## 🎯 Recommended: Start with GitHub Pages

Since your code is already on GitHub, GitHub Pages is the quickest option:
1. Enable GitHub Actions in repository settings
2. Your site will be live automatically!

Then, if you want more features, you can always add Vercel or Netlify later.

