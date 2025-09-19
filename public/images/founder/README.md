# Founder Images

This directory contains the founder headshot image and its responsive variants.

## Expected Files
- `founder-headshot.webp` - Original high-quality image (max 1600px width)
- `founder-headshot-400.webp` - Small variant (400px width)
- `founder-headshot-800.webp` - Medium variant (800px width)
- `founder-headshot-1600.webp` - Large variant (1600px width)

## Usage
The Founders page is configured to use these images with responsive srcset for optimal loading performance.

To replace the founder headshot:
1. Upload the new image to this directory as `founder-headshot.webp`
2. Generate responsive variants using image optimization tools
3. Update the FOUNDER_DATA in `/client/src/data/founder.ts` if needed