import { NextRequest, NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils/backend";

export const POST = async (request: NextRequest) => {
    const data = await request.json();

    if (
        !hasClientServerAccess(
            data.userId,
            data.timestamp,
            data.userId,
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

    return await fetch(
        `${process.env.X_INDICATOR_API}/testArchive?userId=${data.userId}&timestamp=${data.timestamp}&pageNumber=${data.pageNumber}`,
        {
            method: "GET",
            headers: XIndicatorApiHeaders(
                process.env.X_INDICATOR_API_KEY ?? ""
            ),
        }
    )
        .then(async (response) => {
            if (!response.ok) {
                return response.json().then(async (error) => {
                    console.error(
                        "Failed to get success response from /testArchive api.",
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
                "Something went wrong while calling /testArchive api.",
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
