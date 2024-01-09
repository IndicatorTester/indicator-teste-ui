import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/paddle";
import { XIndicatorApiHeaders } from "../utils";

export async function POST(req: NextRequest) {
    const signature = req.headers.get("Paddle-Signature")!;
    const body = await req.text();
    const isValid = await validateSignature(
        signature,
        body,
        process.env.PADDLE_WEBHOOK_SECRET!
    );

    if (!isValid) {
        return NextResponse.json(
            {
                message: "Invalid webhook signature!",
            },
            {
                status: 401,
            }
        );
    }

    const parsedBody = JSON.parse(body);

    switch (parsedBody.event_type) {
        case "transaction.completed":
            const userId = parsedBody.data["custom_data"].userId;
            const priceId = parsedBody.data["custom_data"].priceId;
            return updateUserData(userId, priceId);
        default:
            break;
    }

    return NextResponse.json(
        {
            message: "done",
        },
        {
            status: 200,
        }
    );
}

async function updateUserData(userId: string, priceId: string) {
    return await fetch(
        `${process.env.X_INDICATOR_API}/payment?userId=${userId}&priceId=${priceId}`,
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
                        "Failed to get success response from get /payment api.",
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
                "Something went wrong while calling get /payment api.",
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
}
