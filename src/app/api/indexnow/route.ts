import { NextResponse } from "next/server";
import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";

const INDEXNOW_KEY = "d782c229680c5b58f2b44424480fc82d";
const HOST = "pasindupiumal.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

function getAllSiteUrls(): string[] {
  const baseUrl = `https://${HOST}`;
  const coreUrls = [
    baseUrl,
    `${baseUrl}/chrome-extension-developer-for-hire`,
    `${baseUrl}/full-stack-saas-developer-for-hire`,
    `${baseUrl}/projects`,
    `${baseUrl}/cv`,
    `${baseUrl}/contact`,
  ];

  const projectUrls = allPosts.map(
    (post) => `${baseUrl}/projects/${post._meta.path.replace(/\.mdx$/, "")}`
  );

  return [...coreUrls, ...projectUrls];
}

export async function GET() {
  const urls = getAllSiteUrls();
  return NextResponse.json({
    status: "ready",
    host: HOST,
    keyLocation: KEY_LOCATION,
    urlCount: urls.length,
    sampleUrls: urls.slice(0, 5),
    message: "Send a POST request to this endpoint to submit all URLs to IndexNow (Bing & Yandex).",
  });
}

export async function POST(req: Request) {
  try {
    let urlsToSubmit: string[] = [];

    try {
      const body = await req.json();
      if (Array.isArray(body?.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // If no JSON body provided, default to all site URLs
    }

    if (urlsToSubmit.length === 0) {
      urlsToSubmit = getAllSiteUrls();
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlsToSubmit,
    };

    // Submit to IndexNow API (shared hub for Bing, Yandex, Seznam, Naver)
    const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "IndexNow-Client/1.0 (pasindupiumal.com)",
      },
      body: JSON.stringify(payload),
    });

    const success = indexNowResponse.ok || indexNowResponse.status === 202;

    return NextResponse.json({
      success,
      status: indexNowResponse.status,
      statusText: indexNowResponse.statusText,
      submittedUrls: urlsToSubmit.length,
      targetEngines: ["Bing", "Yandex", "Seznam", "Naver"],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to submit to IndexNow",
      },
      { status: 500 }
    );
  }
}
