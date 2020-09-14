import App from "next/app";
import {
	ThemeProvider,
	createGlobalStyle,
	DefaultTheme,
} from "styled-components";
import TodoProvider from "../store/store";

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
	}	


	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-family: sans-serif;
	}

	body {
		background-color: ${({ theme }) => theme.colors.primary};
	}

`;

const theme: DefaultTheme = {
	colors: {
		primary: "#ff9770",
		secondary1: "#70d6ff",
		secondary2: "#ff70a6",
		terciary1: "#ffd670",
		terciary2: "#e9ff70",
	},
};

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
