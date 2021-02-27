import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import TodoProvider from "../store/store";
import { darkTheme as theme } from "../theme";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
	
	html {
		box-sizing: border-box;
	}	


	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-family: 'Josefin Sans', sans-serif;
		font-size: 18px;
	}

	body {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.blue[900]};
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
	}

	#__next {
		width: 100%;
	}

`;

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<TodoProvider>
					<Component {...pageProps} />
				</TodoProvider>
			</ThemeProvider>
		);
	}
}
