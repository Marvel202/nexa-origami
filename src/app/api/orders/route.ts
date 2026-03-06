import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, productName, productPrice, quantity } = body;

    if (!name || !email || !productName || !quantity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const orderData = {
      name,
      email,
      productName,
      productPrice,
      quantity,
      timestamp: new Date().toISOString(),
    };

    // Send to Google Sheets webhook
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
      } catch (err) {
        console.error("Failed to send to Google Sheets:", err);
      }
    }

    return NextResponse.json({
      message: "Thank you for your order. We will soon contact with you.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process order" },
      { status: 500 }
    );
  }
}
