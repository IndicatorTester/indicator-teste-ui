import crypto from 'crypto';

const X_INDICATOR_API_SECRET = process.env.X_INDICATOR_API_KEY;

export const XIndicatorApiHeaders = () => {
    const timestamp = Date.now().toString();

    const value = timestamp + X_INDICATOR_API_SECRET + timestamp;
    const hash = crypto.createHash('sha512').update(value).digest('hex');

    return {
        "Content-Type": "application/json",
        "Auth": hash,
        "Timestamp": timestamp,
    };
}