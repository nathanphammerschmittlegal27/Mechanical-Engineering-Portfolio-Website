# Image Management Guide

## Where Images Live

All images for your portfolio website should be placed in:
```
public/images/
```

This folder has been created for you. Files in the `public` folder are served directly by Vite at the root path.

## How to Add/Upload Images

### Step 1: Add Your Image Files
1. Copy your image files (`.jpg`, `.png`, `.webp`, etc.) to the `public/images/` folder
2. Use descriptive filenames, for example:
   - `autonomous-drone-frame.jpg`
   - `autonomous-drone-frame-process-1.jpg`
   - `hydraulic-actuator-system.jpg`
   - `ev-battery-thermal.jpg`

### Step 2: Update Image References
Open `src/data/projects.ts` and update the image URLs:

**Before (using external URLs):**
```typescript
imageUrl: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=2500',
```

**After (using local images):**
```typescript
imageUrl: '/images/autonomous-drone-frame.jpg',
```

## Example: Updating a Project

Here's a complete example for the first project:

```typescript
{
  id: '1',
  title: 'Autonomous Drone Frame',
  category: 'Robotics',
  description: 'Lightweight carbon fiber airframe optimized for endurance and payload stability using generative design.',
  imageUrl: '/images/autonomous-drone-frame.jpg',  // ← Changed from external URL
  detailDescription: '...',
  detailImages: [
    {
      imageUrl: '/images/project-image-1.webp',
      aspectRatio: 'auto',
      size: 'full'
    }
  ]
}
```

## Important Notes

1. **Path Format**: Always start with `/images/` (not `./images/` or `images/`)
2. **File Names**: Use lowercase with hyphens (e.g., `my-project-image.jpg`)
3. **Image Sizes**: 
   - Main images: 1200x800px or larger
   - Detail images: 800x600px or larger
4. **File Formats**: JPG for photos, PNG for graphics, WebP for best compression

## Where Images Are Used

Images are referenced in two places:
1. **Main project image** (`imageUrl`) - shown on project cards
2. **Detail images** (`detailImages`) - shown on project detail pages

Both are defined in `src/data/projects.ts` in the `ENGINEERING_PROJECTS` array.

## Quick Reference

- **Images folder**: `public/images/`
- **Update file**: `src/data/projects.ts`
- **Path format**: `/images/your-image-name.jpg`
- **No imports needed**: Just use the path as a string


