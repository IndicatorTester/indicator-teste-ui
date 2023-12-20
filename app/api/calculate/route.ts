import { NextResponse } from "next/server";
import { XIndicatorApiHeaders } from "../utils";

export const POST = async (request: Request) => {
    const response = await fetch(`${process.env.X_INDICATOR_API}/calculate`, {
        method: "POST",
        headers: XIndicatorApiHeaders(),
        body: JSON.stringify(await request.json()),
    });

    if (!response.ok) {
        throw new Error("An error occurred while making the request.");
    }

    return NextResponse.json(await response.json());
};
