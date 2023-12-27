import React from "react";
import { Heading, Row, Container } from "@edene/components";
import { ThemeProvider } from "@edene/foundations";
import Voltio from "../components/offers/Voltio";
import ShareNow from "../components/offers/ShareNow";

const theme = {
	color: "#202D34",
	hover: "#485963",
};

const Links = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Row direction="column" align="center-center" gap={3} noGlutters>
					<Heading size="h4">Comparador apps car sharing</Heading>

					<Voltio />
					<ShareNow />
				</Row>
			</Container>
		</ThemeProvider>
	);
};

export default Links;
