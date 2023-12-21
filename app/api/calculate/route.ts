import { NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils";

export const POST = async (request: Request) => {
    const data = await request.json();

    if (
        !hasClientServerAccess(
            data.symbol,
            data.userId,
            data.apiKey,
            request.headers.get("auth") ?? ""
        )
    ) {
        throw new Error(
            "Someone who does not have the right to call this API is calling it..."
        );
    }

    const response = await fetch(`${process.env.X_INDICATOR_API}/calculate`, {
        method: "POST",
        headers: XIndicatorApiHeaders(),
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("An error occurred while making the request.");
    }

    return NextResponse.json(await response.json());
};
