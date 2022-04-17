import Document, { Head, Html, Main, NextScript } from 'next/document'
// styled components 스타일이 적용전에 렌더가 되는 문제 해결하기
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // csr의 경우에는 useEffect함수를 사용하여 데이터 패칭 ( 사전에 데이터를 불러옴 )
  // componentDidMount, useEffect로 컴포넌트가 마운트 되고 나서 data fetching하는 경우가 많음
  static async getInitialProps(ctx) {

    // step 1 : create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          {/* _app.js가 실행되면서 갖추어진 content들은 Main Component 아래에 생성됨 */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}