import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/SpreloLogoOnly.svg" />
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5M2Y1FQ3F0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5M2Y1FQ3F0');
              `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
