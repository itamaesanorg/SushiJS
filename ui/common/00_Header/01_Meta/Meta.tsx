import Head from 'next/head'

const Meta = () => (
	<Head>
		<title>npm i sushis | SushiJS Framework</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>
		<meta name='apple-mobile-web-app-title' content='Rice Bowl' />
		<meta name='application-name' content='SushiJS Framework' />
		<meta name='description' content='ITAMAESAN ORG is an open source organization that aims to promote the use of open source software in the web development industry.' />
		<meta
			name='theme-color'
			content='#f4f4f5'
			media='(prefers-color-scheme: light)'
		/>
		<meta
			name='theme-color'
			content='#18181b'
			media='(prefers-color-scheme: dark)'
		/>
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/>
		<link rel='apple-touch-icon' href='/images/icon-maskable-512.png' />
		<link rel='icon' type='image/png' href='/images/favicon.png' />
		<link rel='manifest' href='/manifest.json' />
	</Head>
)

export default Meta
