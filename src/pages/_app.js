import Theme from '../styles/theme';

// component 속성값은 서버에 요청한 페이지
// pages 안에 있는 component와 매칭 시킴
// 예 : localhost/3000/home에 접속하면 component는 home 컴포넌트를 가리킴

// 페이지 공통 레이아웃
// 페이지 탐색할 때 상태 유지
// 추가 데이터를 페이지에 주입 (pageProps) > getInitialProps를 통해 내려받은 props
// 글로벌 css 추가

export default function App({ Component, pageProps}) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

// pageProps는 App에서 불러오는 모든 페이지에 공통된 데이터
// 아래와 같이 getInitialProps를 통해 데이터를 받아와 pageProps에 저장

/**
 * export default class MyApp extends App {

	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

    // 실행하고자 하는 component에 getInitialprops가 있으면 실행하여 props를 받아올 수 있다.
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps
		};
	}

	render() {
		const { Component, pageProps, router } = this.props;

		return (
			<div>
				<Component {...pageProps} />
			</div>

		);
	}
};
 */
