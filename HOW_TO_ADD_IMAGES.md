# How to Add Your Project Images

## Quick Steps

1. **Take screenshots** of your 3 projects:
   - AI Cofounder (https://aicofounder-alpha.vercel.app)
   - AI Bias Detection (https://ai-bias-eight.vercel.app/)
   - Swap Circle (https://swapcircle1-not-raghu-not-raghus-projects.vercel.app/)

2. **Save them** in the `public/projects/` folder with these exact names:
   - `ai-cofounder.jpg`
   - `ai-bias.jpg`
   - `swap-circle.jpg`

3. **That's it!** The code is already configured to use these images.

## Image Guidelines

### Recommended Specs
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **Dimensions**: 800x600 pixels (4:3 ratio)
- **File Size**: Under 500KB each
- **Quality**: 80-90% (good balance of quality and size)

### How to Get Good Screenshots

1. Open each project in your browser
2. Set browser window to ~1600x1200 for best quality
3. Use browser's screenshot tool or:
   - Windows: Win + Shift + S
   - Mac: Cmd + Shift + 4
4. Crop to show the main interface/features

### Optimize Your Images (Optional but Recommended)

Use free tools to compress:
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim** (Mac): https://imageoptim.com

## Adding More Projects Later

To add more projects in the future:

1. Add the image to `public/projects/your-project-name.jpg`

2. Edit `src/App.tsx` and add to the `PROJECTS` array:

```typescript
{
  id: "your-project-id",
  title: "Your Project Name",
  description: "Brief description of what it does",
  imageSrc: "/projects/your-project-name.jpg",
  href: "https://your-project-url.com",
  tag: "AI" // or "Web", "Mobile", etc.
}
```

3. Save and redeploy!

## Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/projects/` folder
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

**Images too large?**
- Compress them using tools mentioned above
- Target under 500KB per image
- Consider converting PNG to JPG

**Need different aspect ratio?**
- Current setup works best with 4:3 (800x600)
- You can use other ratios, but they'll be cropped to fit
