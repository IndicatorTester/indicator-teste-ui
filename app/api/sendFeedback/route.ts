import { NextRequest, NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils/backend";

export const POST = async (request: NextRequest) => {
    const data = await request.json();

    if (
        !hasClientServerAccess(
            data.firstName,
            data.email,
            data.lastName,
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

    return await fetch(`${process.env.X_INDICATOR_API}/sendFeedback`, {
        method: "POST",
        headers: XIndicatorApiHeaders(process.env.X_INDICATOR_API_KEY ?? ""),
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            message: data.message,
        }),
    })
        .then(async (response) => {
            if (!response.ok) {
                return response.json().then(async (error) => {
                    console.error(
                        "Failed to get success response from /sendFeedback api.",
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
                "Something went wrong while calling /sendFeedback api.",
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
