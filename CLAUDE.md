# danielcaldwell-website

## Commits

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>[optional scope]: <description>`, e.g. `feat: add John Muir quote - The Mountains are calling...` or `fix(tools): anchor calculators to top of page`. Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`, `perf`, `build`, `ci`.

## JavaScript

Use ES6+ syntax throughout: `class`, `const`/`let`, arrow functions, template literals. Avoid `var`, ES5 function constructors, and `new Array()`.

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
