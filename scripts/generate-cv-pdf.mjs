import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pasindu Piumal CV</title>
<style>
  @page {
    size: A4 portrait;
    margin: 8mm 12mm 6mm 12mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1f2937;
    background: #ffffff;
    font-size: 7.8pt;
    line-height: 1.28;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  a {
    color: #0056b3;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .header {
    text-align: center;
    margin-bottom: 4px;
  }
  .header h1 {
    font-size: 18pt;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #111827;
    margin-bottom: 1px;
    line-height: 1.1;
  }
  .header .subtitle {
    font-size: 9.5pt;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 2.5px;
  }
  .header .contact-row {
    font-size: 7.5pt;
    color: #4b5563;
    line-height: 1.3;
  }
  
  .section {
    margin-top: 4.5px;
  }
  .section-title {
    font-size: 9pt;
    font-weight: 800;
    color: #0055b3;
    letter-spacing: 0.3px;
    border-bottom: 1.2px solid #0055b3;
    padding-bottom: 1px;
    margin-bottom: 2.5px;
  }
  
  .summary-text {
    font-size: 7.7pt;
    color: #27272a;
    text-align: justify;
    line-height: 1.27;
  }
  
  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.8px;
  }
  .skill-item {
    font-size: 7.6pt;
    line-height: 1.27;
    color: #27272a;
  }
  .skill-item strong {
    font-weight: 700;
    color: #111827;
  }
  
  .item {
    margin-bottom: 2.8px;
  }
  .item:last-child {
    margin-bottom: 0;
  }
  .item-header {
    font-size: 7.8pt;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5px;
  }
  .item-header .tagline {
    font-weight: 600;
    color: #374151;
  }
  ul.bullets {
    list-style-type: disc;
    padding-left: 13px;
    margin-top: 0.5px;
  }
  ul.bullets li {
    font-size: 7.6pt;
    line-height: 1.25;
    color: #27272a;
    margin-bottom: 1px;
    text-align: justify;
  }
  ul.bullets li:last-child {
    margin-bottom: 0;
  }
  .links-inline {
    font-size: 7.4pt;
    margin-top: 0.5px;
  }
  
  .edu-row {
    font-size: 7.6pt;
    line-height: 1.3;
    color: #27272a;
  }
  .edu-row strong {
    color: #111827;
    font-weight: 700;
  }
</style>
</head>
<body>

<div class="header">
  <h1>PASINDU PIUMAL</h1>
  <div class="subtitle">Chrome Extension | Browser Automation | Full-Stack SaaS Engineer</div>
  <div class="contact-row">
    Colombo, Sri Lanka &nbsp;|&nbsp; +94 71 712 3826 &nbsp;|&nbsp; <a href="mailto:pasindupiumal0123@gmail.com">pasindupiumal0123@gmail.com</a> &nbsp;|&nbsp; <a href="https://linkedin.com/in/pasindupiumal" target="_blank">linkedin.com/in/pasindupiumal</a> &nbsp;|&nbsp; <br>
    <a href="https://pasindupiumal.com" target="_blank">pasindupiumal.com</a> &nbsp;|&nbsp; <a href="https://github.com/pasindupiumal" target="_blank">github.com/pasindupiumal</a> &nbsp;|&nbsp; <a href="https://upwork.com/freelancers/pasindupiumal" target="_blank">upwork.com/freelancers/pasindupiumal</a>
  </div>
</div>

<div class="section">
  <div class="section-title">PROFESSIONAL SUMMARY</div>
  <p class="summary-text">
    Top Rated Chrome Extension, browser automation and full-stack SaaS engineer with 100% Upwork Job Success and 175+ delivered projects. Specializes in Manifest V3, WXT, Plasmo, React/Next.js, TypeScript, MERN/Node.js, AI integrations, browser automation and production SaaS. Builds end-to-end products spanning extension UI, background/service-worker logic, APIs, authentication, databases, subscriptions, dashboards, scraping and resilient automation across third-party web apps.
  </p>
</div>

<div class="section">
  <div class="section-title">CORE SKILLS</div>
  <div class="skills-list">
    <div class="skill-item">
      <strong>Browser Extensions:</strong> Chrome Extensions, Browser Extensions, Manifest V3, WXT Framework, Plasmo, Vite / CRXJS, Chrome APIs, Content Scripts, Background Service Workers, Side Panel, declarativeNetRequest, Offscreen Documents, chrome.scripting, chrome.storage, chrome.identity, Main/Isolated World execution, DOM Manipulation, MutationObserver, Shadow DOM, cross-browser WebExtensions (Chrome, Firefox, Safari, Edge), MV2-to-MV3 migration, Chrome Web Store compliance &amp; approval
    </div>
    <div class="skill-item">
      <strong>Full-Stack / MERN:</strong> MERN Stack (MongoDB, Express.js, React, Node.js), React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, REST APIs, WebSockets, SaaS architecture, authentication, OAuth/JWT, subscription and licensing flows
    </div>
    <div class="skill-item">
      <strong>Automation / Data:</strong> Playwright, Puppeteer, Browser Automation, Web Scraping, Data Extraction, form/workflow automation, real-time monitoring, API/network integration, multi-ATS automation, Google APIs, Google Apps Script, Google Sheets API
    </div>
    <div class="skill-item">
      <strong>AI / Backend / Cloud:</strong> OpenAI API, Gemini API, RAG, AI model integration, MongoDB, Firebase/Firestore, Supabase, Stripe, ExtensionPay, Python, Git, GitHub, Docker, AWS, Vercel
    </div>
  </div>
</div>

<div class="section">
  <div class="section-title">PROFESSIONAL EXPERIENCE</div>
  
  <div class="item">
    <div class="item-header">Software Engineer &nbsp;|&nbsp; ByteSquadLabs &nbsp;|&nbsp; 2023 - Present</div>
    <ul class="bullets">
      <li>Develop Chrome extension and full-stack web products using React, Next.js, TypeScript, Node.js, APIs, authentication, databases and SaaS workflows.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">Freelance Chrome Extension &amp; SaaS Developer &nbsp;|&nbsp; Upwork &nbsp;|&nbsp; 2025 - Present</div>
    <ul class="bullets">
      <li>Top Rated with 100% Job Success, focused on Manifest V3, browser automation, AI extensions, real-time monitoring, scraping, SaaS dashboards and third-party integrations across a broader portfolio of 175+ delivered projects.</li>
      <li>Engineer reliable automation for dynamic DOMs, authenticated sessions, service-worker lifecycles, WebSockets, retries, recovery logic, OAuth and subscription-gated products.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">Freelance Browser Automation Developer &nbsp;|&nbsp; Fiverr &nbsp;|&nbsp; 2025 - Present</div>
    <ul class="bullets">
      <li>Build custom Chrome extensions, browser automation tools, AI integrations, scraping/data workflows and SaaS-connected browser products for international clients; profile maintains a 5.0 rating.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">SELECTED PROJECTS</div>

  <div class="item">
    <div class="item-header">Tech Copilot &nbsp;|&nbsp; <span class="tagline">Manifest V3, OpenAI, Gemini RAG, ExtensionPay</span></div>
    <ul class="bullets">
      <li>Live automotive AI copilot for technicians that works alongside OEM manuals and service systems. It helps decode VIN context, capture/reference technical content, surface service/TSB information, explain repair steps and stream AI diagnostic guidance inside Chrome/Edge. Built through six paid Upwork milestones worth $1,875+ with a 5.0 client review, plus usage-based free trial and subscription gating.</li>
    </ul>
    <div class="links-inline">
      Live: <a href="https://www.techaicopilot.com/how-it-works" target="_blank">techaicopilot.com/how-it-works</a> &nbsp;|&nbsp; Case study: <a href="https://pasindupiumal.com/projects/tech-copilot" target="_blank">pasindupiumal.com/projects/tech-copilot</a>
    </div>
  </div>

  <div class="item">
    <div class="item-header">RoboApply &amp; Sociax &nbsp;|&nbsp; <span class="tagline">Multi-ATS Automation, OpenAI, Browser Automation</span></div>
    <ul class="bullets">
      <li>AI-powered job application automation that fills and submits applications across Greenhouse, Workable, Ashby, Workday and Oracle, handles resume uploads, and supports AI-generated resumes/cover letters. Delivered RoboApply's first working Ashby integration in one week after 20+ previous developer attempts, then expanded the working multi-ATS system.</li>
    </ul>
    <div class="links-inline">
      Case study: <a href="https://pasindupiumal.com/projects/roboapply-ats-automation" target="_blank">pasindupiumal.com/projects/roboapply-ats-automation</a> &nbsp;|&nbsp; Portfolio: <a href="https://pasindupiumal.com/projects" target="_blank">pasindupiumal.com/projects</a>
    </div>
  </div>

  <div class="item">
    <div class="item-header">Amazon Shift Sniper Series &nbsp;|&nbsp; <span class="tagline">Manifest V3, Real-Time Monitoring, DOM/Session Automation</span></div>
    <ul class="bullets">
      <li>Series of six production extensions for Amazon hiring and scheduling workflows: sub-second shift detection and booking, OTP capture, real-time slot analytics, multi-profile synchronization, session-aware execution and automatic recovery from broken states. Used Main/Isolated World execution, MutationObserver, Shadow DOM traversal, persistent MV3 runtime patterns and 403/session recovery for long-running reliability.</li>
    </ul>
    <div class="links-inline">
      Case study: <a href="https://pasindupiumal.com/projects/amazon-shift-sniper" target="_blank">pasindupiumal.com/projects/amazon-shift-sniper</a> &nbsp;|&nbsp; Verified work: <a href="https://www.upwork.com/freelancers/pasindupiumal?p=2062560822872154112" target="_blank">upwork.com/freelancers/pasindupiumal</a>
    </div>
  </div>

  <div class="item">
    <div class="item-header">SiteSafety Shield &nbsp;|&nbsp; <span class="tagline">Manifest V3, Google Safe Browsing, VirusTotal, PhishTank</span></div>
    <ul class="bullets">
      <li>Client browser-security extension built in 2023 through ByteSquad Labs. Checks URLs against multiple threat-intelligence sources, applies configurable risk scoring and local caching, and warns or blocks users before proceeding to known phishing, malware or scam pages.</li>
    </ul>
    <div class="links-inline">
      Case study: <a href="https://pasindupiumal.com/projects/sitesafety-shield-extension" target="_blank">pasindupiumal.com/projects/sitesafety-shield-extension</a>
    </div>
  </div>

  <div class="item">
    <div class="item-header">High-Scale Chrome Extension + SaaS &nbsp;|&nbsp; <span class="tagline">Next.js, Supabase/PostgreSQL, Stripe, Browser Automation</span></div>
    <ul class="bullets">
      <li>Engineered a commercial browser-automation product as a complete extension + SaaS platform: Manifest V3 client, Next.js dashboard, Supabase/PostgreSQL backend, Stripe subscriptions, licensing and real-time automation. The public portfolio case study reports 100K+ users and $1M+ software revenue, demonstrating product architecture beyond a standalone extension.</li>
    </ul>
    <div class="links-inline">
      Live product: <a href="https://elitefutbot.com" target="_blank">elitefutbot.com</a> &nbsp;|&nbsp; Case study: <a href="https://pasindupiumal.com/projects/fut-snipe-bot" target="_blank">pasindupiumal.com/projects/fut-snipe-bot</a>
    </div>
  </div>

  <div style="font-size: 7.8pt; margin-top: 3px; color: #4b5563;">
    More work: Explore case studies and project examples from 175+ delivered projects at <a href="https://pasindupiumal.com/projects" target="_blank">pasindupiumal.com/projects</a>
  </div>
</div>

<div class="section">
  <div class="section-title">EDUCATION &amp; CERTIFICATIONS</div>
  <div class="edu-row">
    <strong>BSc (Hons) in Software Engineering</strong> &nbsp;|&nbsp; University of Westminster &nbsp;|&nbsp; 2024 - Present
  </div>
  <div class="edu-row">
    <strong>Foundation Programme in Software Engineering</strong> &nbsp;|&nbsp; Informatics Institute of Technology &nbsp;|&nbsp; 2023 - 2024
  </div>
  <div class="edu-row">
    <strong>LinkedIn Learning:</strong> React Essential Training, React Native Essential Training, TypeScript Essential Training (2025)
  </div>
</div>

</body>
</html>`;

const tmpHtml = "/tmp/cv_source.html";
const outPdf = "/tmp/cv_generated.pdf";
fs.writeFileSync(tmpHtml, htmlContent, "utf8");

const chromeBin = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const cmd = `"${chromeBin}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdf}" "file://${tmpHtml}"`;
console.log("Running Chrome to generate PDF...");
execSync(cmd, { stdio: "inherit" });

const targets = [
  path.join(process.cwd(), "public/pasindu-piumal-cv.pdf"),
  path.join(process.cwd(), "public/cv.pdf"),
  path.join(process.cwd(), "public/resume.pdf"),
];

for (const target of targets) {
  fs.copyFileSync(outPdf, target);
  console.log("Updated:", target);
}
console.log("All CV PDF targets successfully updated!");
