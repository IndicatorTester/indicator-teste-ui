import { NextRequest, NextResponse } from "next/server";
import { XIndicatorApiHeaders, getIpAddress } from "../utils";

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json();

        const response = await fetch(
            `${process.env.X_INDICATOR_API}/preOrder`,
            {
                method: "POST",
                headers: XIndicatorApiHeaders(),
                body: JSON.stringify({
                    ip: getIpAddress(request),
                    email: data.email,
                }),
            }
        );

        if (response.status !== 200) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Something went wrong, try again later.",
                },
                { status: response.status }
            );
        }

        return NextResponse.json(await response.json());
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: "Something went wrong, try again later.",
            },
            { status: 500 }
        );
    }
};
