import Head from "next/head";

const HeadSEO = ({ title }) => (
	<Head>
		<html lang="en" />
		<title>{title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta
			name="description"
			content="This is the official website of Alvaro Losada. Alvaro Losada is a Front End Engineer who works at eDreams ODIGEO."
		></meta>
	</Head>
);

export default HeadSEO;
