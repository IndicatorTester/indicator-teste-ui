/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: false,
            },
        ];
    },
    env: {
        X_INDICATOR_API: "https://e8bqvdcj9m.eu-west-1.awsapprunner.com",
        // X_INDICATOR_API: "http://0.0.0.0:3010", // For Debugging
        TWELVE_DATA_API: "https://api.twelvedata.com",
        X_INDICATOR_API_KEY: process.env.X_INDICATOR_API_KEY,
    },
};

module.exports = nextConfig;
