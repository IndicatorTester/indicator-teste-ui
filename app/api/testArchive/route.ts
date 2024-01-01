import { NextRequest, NextResponse } from "next/server";
import { XIndicatorApiHeaders, hasClientServerAccess } from "../utils";

export const POST = async (request: NextRequest) => {
    try {
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

        const response = await fetch(
            `${process.env.X_INDICATOR_API}/testArchive?userId=${data.userId}&timestamp=${data.timestamp}&pageNumber=${data.pageNumber}`,
            {
                method: "GET",
                headers: XIndicatorApiHeaders(
                    process.env.X_INDICATOR_API_KEY ?? ""
                ),
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
