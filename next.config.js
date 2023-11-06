/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.ctfassets.net'],
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
