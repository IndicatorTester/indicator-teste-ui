import { NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils/backend";

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
        return NextResponse.json(
            {
                success: false,
                error: "Access Denied",
            },
            { status: 403 }
        );
    }

    return await fetch(`${process.env.X_INDICATOR_API}/calculate`, {
        method: "POST",
        headers: XIndicatorApiHeaders(process.env.X_INDICATOR_API_KEY ?? ""),
        body: JSON.stringify(data),
    })
        .then(async (response) => {
            if (!response.ok) {
                return response.json().then(async (error) => {
                    console.error(
                        "Failed to get success response from /calculate api.",
                        error
                    );
                    return NextResponse.json(
                        {
                            success: false,
                            error: error.detail,
                        },
                        { status: 403 }
                    );
                });
            }
            return NextResponse.json(await response.json());
        })
        .catch((error) => {
            console.error(
                "Something went wrong while calling /calculate api.",
                error
            );
            return NextResponse.json(
                {
                    success: false,
                    error: "Unknown error, kindly try again later!",
                },
                { status: 500 }
            );
        });
};
