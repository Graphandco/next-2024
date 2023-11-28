/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '**',
            },
        ],
    },
};

module.exports = nextConfig;

// module.exports = withPWA({
//     pwa: {
//         dest: 'public',
//         register: true,
//         skipWaiting: true,
//     },
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
//     images: {
//         domains: ['images.ctfassets.net'],
//     },
// });
