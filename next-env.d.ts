/// <reference types="next" />
/// <reference types="next/types/global" />

import {} from "styled-components/cssprop";
import { DefaultTheme } from "styled-components";
import { darkTheme as theme } from './theme'

declare module "styled-components" {
	type Theme = typeof theme
	export interface DefaultTheme extends Theme 
}
