import type { AppProps } from "next/app"

function MyApp({ Component, pageProps}: AppProps) {
return (
    <>
    This is _app
    <Component {...pageProps}/>
    </>
)
}

export default MyApp