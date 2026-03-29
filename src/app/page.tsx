import Link from "next/link";

export const runtime = "edge";

export default function RootRedirectPage() {
    return (
        <>
            <meta httpEquiv="refresh" content="0; url=/zh-cn/" />
            <script
                dangerouslySetInnerHTML={{
                    __html: "window.location.replace('/zh-cn/');",
                }}
            />
            <p>
                Redirecting to <Link href="/zh-cn/">/zh-cn/</Link>...
            </p>
        </>
    );
}