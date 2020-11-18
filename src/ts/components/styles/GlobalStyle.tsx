import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		box-sizing: border-box;
		display: block;
		margin: 0;
	}

	p, b {
		font-size: 12px;
	}
`;

export default GlobalStyle;
