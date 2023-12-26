/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: false,
            },
            {
                source: "/features",
                destination: "/features/indicator-tester",
                permanent: false,
            },
        ];
    },
    env: {
        // XIndicator backend config
        X_INDICATOR_API: process.env.X_INDICATOR_API,
        X_INDICATOR_API_KEY: process.env.X_INDICATOR_API_KEY,

        // 3rd part config
        TWELVE_DATA_API: "https://api.twelvedata.com",

        // Auth0 config
        AUTH0_SECRET: process.env.AUTH0_SECRET,
        AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
        AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    },
};

module.exports = nextConfig;
