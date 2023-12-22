import { NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils";

export const GET = async (request: Request) => {
    return NextResponse.json(
        {
            success: true,
            key: process.env.X_INDICATOR_API_KEY,
        },
        { status: 200 }
    );
};
