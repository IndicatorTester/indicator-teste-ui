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
        TWELVE_DATA_API: "https://api.twelvedata.com",
    },
};

module.exports = nextConfig;
