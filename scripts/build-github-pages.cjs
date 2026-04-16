/**
 * Static export for GitHub Pages: `output: 'export'` cannot include App Router
 * route handlers, so this script temporarily moves `src/app/api` aside, runs
 * `next build`, then restores it. Local dev and normal `npm run build` unchanged.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const apiDir = path.join(root, 'src', 'app', 'api');
const backupDir = path.join(root, '.tmp-api-backup-for-gh-pages');

let moved = false;
if (fs.existsSync(apiDir)) {
  if (fs.existsSync(backupDir)) {
    fs.rmSync(backupDir, { recursive: true, force: true });
  }
  fs.renameSync(apiDir, backupDir);
  moved = true;
}

try {
  execSync('npx next build', {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      STATIC_EXPORT: 'true',
      BASE_PATH: (process.env.BASE_PATH || '').trim().replace(/\/$/, ''),
    },
  });
} finally {
  if (moved && fs.existsSync(backupDir)) {
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true, force: true });
    }
    fs.renameSync(backupDir, apiDir);
  }
}

const outDir = path.join(root, 'out');
const nojekyll = path.join(outDir, '.nojekyll');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(nojekyll, '');
}
