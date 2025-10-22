/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Define the protocol
                hostname: 'utfs.io', // Allow images from the utfs.io domain
                pathname: '/**', // Allow all paths from the domain
                
            },
        ],
        domains: ['jpdxhku9tu.ufs.sh'], // Add your image hostname here
    },
    // Add cache headers for favicon
    async headers() {
        return [
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
