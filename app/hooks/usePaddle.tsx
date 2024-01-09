"use client";

import {
    initializePaddle,
    InitializePaddleOptions,
    Paddle,
} from "@paddle/paddle-js";
import { useEffect, useState } from "react";

export default function usePaddle() {
    const [paddle, setPaddle] = useState<Paddle>();
    useEffect(() => {
        initializePaddle({
            environment: process.env.PADDLE_ENV,
            token: process.env.PADDLE_CLIENT_TOKEN!,
        } as unknown as InitializePaddleOptions).then(
            (paddleInstance: Paddle | undefined) => {
                if (paddleInstance) {
                    setPaddle(paddleInstance);
                }
            }
        );
    }, []);

    return paddle;
}
