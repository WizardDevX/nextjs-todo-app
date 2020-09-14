import { css } from "styled-components";

export function setBackgroundImage(
	url: string,
	size: string = "cover"
): string {
	return `
    background-image: url("${url}");
	background-size: ${size};
	background-repeat: no-repeat;
    `;
}

export const mediaQuery = (minmax: string, size: string) => (
	rules: TemplateStringsArray | any
) => css`@media screen and (${minmax}-width: ${size}){ ${rules} }`;
