import crypto from "crypto";

export const hasClientServerAccess = (
    key1: string,
    key2: string,
    key3: string,
    clientHash: string
) => {
    const value =
        key1.charAt(0) +
        "#" +
        key2.charAt(0) +
        key1 +
        key3 +
        "&" +
        key2 +
        key3.charAt(0);
    const hash = crypto.createHash("sha512").update(value).digest("hex");

    return hash === clientHash;
};

export const XIndicatorApiHeaders = (apiKey: string) => {
    const timestamp = Date.now().toString();

    const value = timestamp + apiKey + timestamp;
    const hash = crypto.createHash("sha512").update(value).digest("hex");

    return {
        "Content-Type": "application/json",
        Auth: hash,
        Timestamp: timestamp,
    };
};
