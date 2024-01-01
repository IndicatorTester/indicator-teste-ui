import { NextRequest, NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils";

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json();

        if (
            !hasClientServerAccess(
                data.email,
                data.ip,
                data.email,
                request.headers.get("auth") ?? ""
            )
        ) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Access Denied",
                },
                { status: 403 }
            );
        }

        const response = await fetch(
            `${process.env.X_INDICATOR_API}/preOrder`,
            {
                method: "POST",
                headers: XIndicatorApiHeaders(
                    process.env.X_INDICATOR_API_KEY ?? ""
                ),
                body: JSON.stringify({
                    ip: data.ip,
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

        return NextResponse.json({
            ip: data.ip,
            email: data.email,
        });
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
