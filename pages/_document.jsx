import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </Html>
        );
    }
}

export default MyDocument;