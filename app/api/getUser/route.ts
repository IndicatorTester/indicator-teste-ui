import { NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils";

export const POST = async (request: Request) => {
    const data = await request.json();

    if (
        !hasClientServerAccess(
            data.userId,
            data.userId,
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

    return await fetch(`${process.env.X_INDICATOR_API}/user?userId=${data.userId}`, {
        method: "GET",
        headers: XIndicatorApiHeaders(process.env.X_INDICATOR_API_KEY ?? ""),
    })
        .then(async (response) => {
            if (!response.ok) {
                return response.json().then(async (error) => {
                    console.error(
                        "Failed to get success response from get /user api.",
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
                "Something went wrong while calling get /user api.",
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
