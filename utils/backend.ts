import crypto from "crypto";

export const INTERVALS_MAPPING: any = {
    "1min": "One Minute",
    "5min": "Five Minutes",
    "15min": "15 Minutes",
    "30min": "30 Minutes",
    "45min": "45 Minutes",
    "1h": "One Hour",
    "2h": "Two Hours",
    "4h": "Four Hours",
    "1day": "One Day",
    "1week": "One Week",
    "1month": "One Month",
};

export const generateClientHash = (
    key1: string,
    key2: string,
    key3: string
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
    return crypto.createHash("sha512").update(value).digest("hex");
};

export const getIpAddress = async () => {
    try {
        const response = await fetch("https://api.ipify.org/?format=json");
        return (await response.json()).ip.toString();
    } catch (error) {
        return "";
    }
};
