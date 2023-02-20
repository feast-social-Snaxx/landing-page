/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://snaxx.xyz',
    exclude: ["/404", "/FR/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404", "/FR/404"],
            },
            { userAgent: "*", allow: "/" },
        ],
    },
};
