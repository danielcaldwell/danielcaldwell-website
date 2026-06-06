# danielcaldwell-website

## Images

All images are stored in `./images/`. Do not use subdirectories.

**Naming convention:** `YYYY-MM-DD_Title-With-Hyphens.jpg`
Example: `2008-01-01_Awesome-Sunset-from-330.jpg`

**To add a new image:**
1. Place the file in `./images/` following the naming convention above.
2. Generate a unique 10-character nanoid (alphabet `A-Za-z0-9_-`) that does not conflict with existing IDs in `imagelist.js`.
3. Add a new `ImageInfo` entry to `imagelist.js`:
   ```javascript
   images[N] = new ImageInfo('nanoid', './images/filename.jpg', 'Title', 'YYYY-MM-DD');
   ```
   `author` and `medium` have defaults ("Daniel Caldwell" / "Digital Image on Digital Screen"); only set them if different.
