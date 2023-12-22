import crypto from "crypto";

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
        return (await fetch("https://api.ipify.org/")).text.toString();
    } catch (error) {
        return "";
    }
};
