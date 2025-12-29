# Images Directory

This folder contains all the images used in your portfolio website.

## Folder Structure

Place your images here with descriptive filenames. For example:
- `autonomous-drone-frame.jpg` - Main image for the Autonomous Drone Frame project
- `autonomous-drone-frame-process-1.jpg` - Process image 1
- `autonomous-drone-frame-process-2.jpg` - Process image 2
- `hydraulic-actuator-system.jpg` - Main image for the Hydraulic Actuator System project
- etc.

## How to Use Images

1. **Add your image files** to this folder (`.jpg`, `.png`, `.webp`, etc.)

2. **Update the image URLs** in `src/data/projects.ts`:
   - Replace external URLs with paths starting with `/images/`
   - Example: `imageUrl: '/images/autonomous-drone-frame.jpg'`
   - Example: `processImages: ['/images/project-process-1.jpg', '/images/project-process-2.jpg']`

3. **Image Paths in Vite**:
   - Files in the `public` folder are served at the root path
   - `/images/photo.jpg` refers to `public/images/photo.jpg`
   - No need to import - just use the path as a string

## Recommended Image Sizes

- **Main project images**: 1200x800px or larger (16:9 or 4:3 aspect ratio)
- **Process images**: 800x600px or larger (4:3 aspect ratio)
- **Format**: JPG for photos, PNG for graphics with transparency, WebP for best compression


