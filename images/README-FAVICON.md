# DataSurface Favicon

This directory contains the favicon files for the DataSurface website.

## Files

- `favicon.svg` - The source SVG favicon (64x64 viewBox)
- `generate-favicon.html` - Helper HTML page to generate PNG versions
- `favicon-16x16.png` - 16x16 PNG (generate using helper page)
- `favicon-32x32.png` - 32x32 PNG (generate using helper page)  
- `favicon.png` - 48x48 PNG (generate using helper page)
- `favicon.ico` - Multi-resolution ICO file (generate from PNG)

## How to Generate PNG and ICO Files

### Step 1: Generate PNG Files

1. Open `generate-favicon.html` in a web browser
2. The page will display the favicon rendered at different sizes
3. Right-click each canvas and select "Save image as..."
4. Save the files with these names:
   - `favicon-16x16.png` (16x16 size)
   - `favicon-32x32.png` (32x32 size)
   - `favicon.png` (48x48 size)

### Step 2: Generate ICO File

Option A - Online Tool (Easiest):
1. Go to https://www.favicon-generator.org/ or https://realfavicongenerator.net/
2. Upload the 48x48 PNG file (`favicon.png`)
3. Download the generated `favicon.ico`
4. Place it in this directory

Option B - Using ImageMagick (Command Line):
```bash
# Install ImageMagick if you haven't already
brew install imagemagick  # macOS
# or: apt-get install imagemagick  # Linux

# Generate multi-resolution ICO from PNGs
convert favicon-16x16.png favicon-32x32.png favicon.png favicon.ico
```

Option C - Using GIMP:
1. Open `favicon.png` in GIMP
2. Export as `favicon.ico`
3. Select all resolutions you want to include

## Design Notes

The favicon features the DataSurface logo icon:
- A stacked database cylinder (4 layers) in blue tones
- A planetary ring encircling the database
- Colors match the main brand palette (blues: #60a5fa, #3b82f6, #2563eb, #1d4ed8, #1e3a8a)

The design is optimized to be recognizable at small sizes (16x16).

## Updating the Favicon

If you need to modify the favicon design:

1. Edit `favicon.svg` with your preferred SVG editor
2. Follow the generation steps above to create new PNG/ICO files
3. The HTML pages already reference all the favicon files correctly

