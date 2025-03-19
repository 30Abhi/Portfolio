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
};

export default nextConfig;
