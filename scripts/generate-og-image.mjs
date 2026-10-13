import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const artifactDir = '/Users/ishara/.gemini/antigravity-ide/brain/c6a2fd06-6cbc-46ab-91ca-864d376d0b8b';

const clashFont = fs.readFileSync('public/fonts/ClashDisplay-Semibold.ttf').toString('base64');
const cabinetFont = fs.readFileSync('public/fonts/CabinetGrotesk-Medium.ttf').toString('base64');
const avatarCentered = fs.readFileSync(path.join(artifactDir, 'user_avatar_centered.png')).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @font-face {
    font-family: 'Clash Display';
    src: url('data:font/ttf;base64,${clashFont}') format('truetype');
    font-weight: 600;
    font-display: block;
  }

  @font-face {
    font-family: 'Cabinet Grotesk';
    src: url('data:font/ttf;base64,${cabinetFont}') format('truetype');
    font-weight: 500;
    font-display: block;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background-color: #060913;
    font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #ffffff;
    display: flex;
    align-items: center;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  /* Atmospheric glow layers */
  .bg-glow-left {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    left: -90px;
    top: -20px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.05) 50%, transparent 70%);
    filter: blur(60px);
    z-index: 1;
  }

  .bg-glow-right {
    position: absolute;
    width: 750px;
    height: 750px;
    border-radius: 50%;
    right: -120px;
    bottom: -160px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 70%);
    filter: blur(70px);
    z-index: 1;
  }

  .bg-glow-center {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    right: 220px;
    top: -100px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, transparent 60%);
    filter: blur(45px);
    z-index: 1;
  }

  /* Dotted matrix tech pattern */
  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px);
    background-size: 26px 26px;
    opacity: 0.7;
    z-index: 2;
  }

  /* Border vignette */
  .inner-border {
    position: absolute;
    inset: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    z-index: 3;
    pointer-events: none;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
  }

  /* Card layout */
  .card-container {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 70px 0 75px;
    gap: 55px;
  }

  /* Left avatar */
  .avatar-wrapper {
    position: relative;
    width: 320px;
    height: 320px;
    flex-shrink: 0;
  }

  .avatar-aura {
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.55), rgba(6, 182, 212, 0.35));
    filter: blur(20px);
    opacity: 0.9;
  }

  .avatar-ring {
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(135deg, #22c55e 0%, #10b981 50%, #06b6d4 100%);
    box-shadow: 0 0 45px rgba(34, 197, 94, 0.5);
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center 20%;
    display: block;
    border: 3px solid #060913;
  }

  .avatar-badge {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: #090e1a;
    border: 1.5px solid #22c55e;
    padding: 6px 14px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(34, 197, 94, 0.3);
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
  }

  .avatar-badge span {
    font-size: 13px;
    font-weight: 700;
    color: #e2e8f0;
    letter-spacing: 0.02em;
  }

  /* Right column */
  .info-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .top-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.35);
    padding: 6px 14px;
    border-radius: 9999px;
    color: #4ade80;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .domain-pill {
    font-family: monospace;
    font-size: 15px;
    color: #94a3b8;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 14px;
    border-radius: 8px;
  }

  .name {
    font-family: 'Clash Display', -apple-system, sans-serif;
    font-size: 54px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 8px;
    text-shadow: 0 2px 25px rgba(0,0,0,0.6);
  }

  .title {
    font-size: 23px;
    font-weight: 600;
    color: #34d399;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
    line-height: 1.3;
  }

  /* Symmetrical 4-stat grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  .stat-card {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  }

  .stat-value {
    font-family: 'Clash Display', sans-serif;
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.15;
  }

  .stat-label {
    font-size: 11px;
    color: #94a3b8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 4px;
  }

  /* Tech tags with subtle branded highlights */
  .tech-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tech-pill {
    background: rgba(30, 41, 59, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 7px 13px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .tech-pill.chrome {
    border-color: rgba(34, 197, 94, 0.4);
    color: #86efac;
    background: rgba(34, 197, 94, 0.12);
  }

  .tech-pill.wxt {
    border-color: rgba(99, 102, 241, 0.4);
    color: #a5b4fc;
    background: rgba(99, 102, 241, 0.12);
  }

  .tech-pill.ts {
    border-color: rgba(59, 130, 246, 0.4);
    color: #93c5fd;
    background: rgba(59, 130, 246, 0.12);
  }

  .tech-pill.react {
    border-color: rgba(6, 182, 212, 0.4);
    color: #67e8f9;
    background: rgba(6, 182, 212, 0.12);
  }
</style>
</head>
<body>
  <div class="bg-glow-left"></div>
  <div class="bg-glow-right"></div>
  <div class="bg-glow-center"></div>
  <div class="grid-pattern"></div>
  <div class="inner-border"></div>

  <div class="card-container">
    <div class="avatar-wrapper">
      <div class="avatar-aura"></div>
      <div class="avatar-ring">
        <img class="avatar-img" src="data:image/png;base64,${avatarCentered}" alt="Pasindu Piumal" />
      </div>
      <div class="avatar-badge">
        <div class="pulse-dot"></div>
        <span>Available for Hire</span>
      </div>
    </div>

    <div class="info-column">
      <div class="top-meta">
        <div class="status-pill">
          ★ Top Rated · From $25–$35/hr
        </div>
        <div class="domain-pill">pasindupiumal.com</div>
      </div>

      <h1 class="name">Pasindu Piumal</h1>
      <div class="title">Chrome Extension Developer &amp; Full-Stack SaaS Engineer</div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">175+</div>
          <div class="stat-label">Projects Shipped</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">$1M+</div>
          <div class="stat-label">Software Revenue</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">100k+</div>
          <div class="stat-label">Active Users</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">100%</div>
          <div class="stat-label">Upwork JSS</div>
        </div>
      </div>

      <div class="tech-row">
        <div class="tech-pill chrome">Chrome Extensions (MV3)</div>
        <div class="tech-pill wxt">WXT &amp; Plasmo</div>
        <div class="tech-pill ts">TypeScript</div>
        <div class="tech-pill react">React &amp; Next.js</div>
        <div class="tech-pill">AI Copilots</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const finalHtmlPath = path.join(artifactDir, 'og_card_final.html');
fs.writeFileSync(finalHtmlPath, htmlContent);

const finalPng = path.join(artifactDir, 'og_card_final.png');
execSync(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --screenshot="${finalPng}" --window-size=1200,630 --hide-scrollbars "file://${finalHtmlPath}"`);
console.log('Final card PNG rendered to:', finalPng);

// Now convert to JPEG using Python PIL with 92% quality (perfect balance of high fidelity and small file size ~220KB)
const pyConvertCmd = `python3 -c "
from PIL import Image
im = Image.open('${finalPng}').convert('RGB')
im.save('${path.join(artifactDir, 'og_card_final.jpg')}', quality=92, optimize=True)
im.save('public/og-image.jpg', quality=92, optimize=True)
im.save('public/og-image.png', optimize=True)
print('Optimized JPEG and PNG written to public/og-image.jpg and public/og-image.png')
"`;
execSync(pyConvertCmd);
