#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const INDEXNOW_KEY = "d782c229680c5b58f2b44424480fc82d";
const HOST = "pasindupiumal.com";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// Core static pages
const coreUrls = [
  BASE_URL,
  `${BASE_URL}/chrome-extension-developer-for-hire`,
  `${BASE_URL}/full-stack-saas-developer-for-hire`,
  `${BASE_URL}/projects`,
  `${BASE_URL}/cv`,
  `${BASE_URL}/contact`,
];

// Project MDX files
const contentDir = path.join(rootDir, "content");
let projectUrls = [];
if (fs.existsSync(contentDir)) {
  const files = fs.readdirSync(contentDir);
  projectUrls = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => `${BASE_URL}/projects/${f.replace(/\.mdx$/, "")}`);
}

const allUrls = [...coreUrls, ...projectUrls];

console.log(`[IndexNow] Preparing to submit ${allUrls.length} URLs for ${HOST}...`);

const payload = {
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: allUrls,
};

const endpoints = [
  { name: "IndexNow Global (Bing, Yandex, Seznam, Naver)", url: "https://api.indexnow.org/indexnow" },
  { name: "Bing Direct", url: "https://www.bing.com/indexnow" },
  { name: "Yandex Direct", url: "https://yandex.com/indexnow" },
];

async function submit() {
  for (const endpoint of endpoints) {
    try {
      console.log(`[IndexNow] Submitting to ${endpoint.name}...`);
      const res = await fetch(endpoint.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      console.log(`[IndexNow] ${endpoint.name} response: ${res.status} ${res.statusText}`);
      if (res.status === 200) {
        console.log(`✓ Successfully submitted ${allUrls.length} URLs to ${endpoint.name}`);
      } else if (res.status === 202) {
        console.log(`✓ Accepted (202): Key in validation process for ${endpoint.name}`);
      } else {
        const text = await res.text();
        console.log(`! Response (${res.status}): ${text}`);
      }
    } catch (err) {
      console.error(`✗ Error submitting to ${endpoint.name}:`, err.message);
    }
  }
}

submit().then(() => {
  console.log("[IndexNow] Done submitting all URLs.");
});
