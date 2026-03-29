# Quick Start Guide - Deploy to Vercel

## Step 1: Add Your Project Images

1. Get screenshots of your 3 projects
2. Save them in the `public/projects/` folder as:
   - `ai-cofounder.jpg`
   - `ai-bias.jpg`
   - `swap-circle.jpg`

## Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 3: Deploy on Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio will be live in ~2 minutes at `https://your-project.vercel.app`

## What's Changed for Vercel

✅ Added `vercel.json` configuration
✅ Updated project images to use local files
✅ Optimized build settings
✅ Added proper .gitignore

## Optional: Custom Domain

In Vercel dashboard:
1. Go to your project
2. Settings → Domains
3. Add your custom domain

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Issues? Check the build logs in Vercel dashboard
