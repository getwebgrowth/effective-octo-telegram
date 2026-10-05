import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budgetRange, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Log the contact inquiry (in production this connects to Resend, SendGrid, or a webhook)
    console.log("[ConceptOne Labs - Contact Submission]", {
      timestamp: new Date().toISOString(),
      recipient: siteConfig.email,
      name,
      email,
      company: company || "N/A",
      projectType,
      budgetRange,
      messageLength: message.length,
    });

    // If an external webhook is provided in env (e.g. Slack/Discord/Make/Zapier)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `*New Project Inquiry - ConceptOne Labs LLC*\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company || "N/A"}\n*Project Type:* ${projectType}\n*Budget:* ${budgetRange}\n*Message:*\n${message}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook forwarding failed:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received. We will be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please reach out to hello@conceptonelabs.com directly.",
      },
      { status: 500 }
    );
  }
}
