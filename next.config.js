/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
            {
                source: '/app',
                destination: '/app/indicator-tester',
                permanent: false,
            },
        ];
    }
}

module.exports = nextConfig
