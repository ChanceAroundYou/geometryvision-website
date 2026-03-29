export default function RootRedirectPage() {
    return (
        <html>
            <head>
                <meta httpEquiv="refresh" content="0; url=/zh-cn/" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: "window.location.replace('/zh-cn/');",
                    }}
                />
            </head>
            <body>
                <p>Redirecting to <a href="/zh-cn/">/zh-cn/</a>...</p>
            </body>
        </html>
    );
}