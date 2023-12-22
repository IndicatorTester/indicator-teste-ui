import { NextResponse } from "next/server";
import crypto from "crypto";

const X_INDICATOR_API_SECRET = process.env.X_INDICATOR_API_KEY;

export const POST = async (request: Request) => {
    const data = await request.json();

    const timestamp = data.timestamp;
    const value = timestamp + X_INDICATOR_API_SECRET + timestamp;
    const hash = crypto.createHash("sha512").update(value).digest("hex");
    return NextResponse.json({
        timestamp: timestamp,
        value: value,
        hash: hash,
    });
};
