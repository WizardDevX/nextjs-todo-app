import React, { FC } from "react";
import Head from "next/head";

const Layout: FC<{ title: string }> = ({ children, title = "Todo App" }) => (
	<>
		<Head>
			<title>{title}</title>
		</Head>
		{children}
	</>
);

export default Layout;
