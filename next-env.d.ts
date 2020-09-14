/// <reference types="next" />
/// <reference types="next/types/global" />

import {} from "styled-components/cssprop";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary1: string;
			secondary2: string;
			terciary1: string;
			terciary2: string;
		};
	}
}
