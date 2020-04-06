module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        ['prismjs', {
            languages: ['javascript', 'css', 'markup', 'jsx', 'php', 'shell', 'diff'],
            plugins: ['show-language'],
            theme: 'default',
            css: true
        }]
    ]
};
