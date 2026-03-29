# Vercel Deployment Guide

## Quick Deploy Steps

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Environment Variables (Optional)**
   - If you're using Gemini API features, add `GEMINI_API_KEY` in Vercel:
     - Go to Project Settings → Environment Variables
     - Add: `GEMINI_API_KEY` = your_api_key
   - For this portfolio, the API key is optional since it's mainly static content

## Adding Your Project Images

1. **Add your images to the `public/projects/` folder:**
   - `ai-cofounder.jpg` or `.png`
   - `ai-bias.jpg` or `.png`
   - `swap-circle.jpg` or `.png`

2. **Recommended image specs:**
   - Format: JPG or PNG
   - Dimensions: 800x600px (4:3 ratio)
   - File size: Under 500KB for fast loading

3. **Images are already configured** in the code to use these files

## Post-Deployment

- Your site will be live at: `https://your-project-name.vercel.app`
- Vercel provides automatic HTTPS
- Every push to main branch auto-deploys
- You can add a custom domain in Vercel settings

## Troubleshooting

- If build fails, check the Vercel build logs
- Ensure all dependencies are in `package.json`
- Make sure Node.js version is compatible (18.x or higher recommended)
