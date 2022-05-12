module.exports = {
    apps: [
        {
            name: "DD@Home Nodejs",
            script: "index.js",
            instances: 1,
            error_file: "./logs/error.log",
            out_file: "./logs/out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            autorestart: true,
            watch: ["index.js"],
            env: {
                VERBOSE: true,
                URL: "wss://cluster.vtbs.moe/?runtime=electronv15.3.0&version=1.13.0&platform=win32&uuid=9d44e19b-1afd-47bf-9c1e-39e16bcc14e6&name=Nicolas",
            },
        },
    ],
}
