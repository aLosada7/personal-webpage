import React from "react";
import { Text, Card, Heading, Row, CardSection, CardHeader, Container, Icon } from "@edene/components";
import { ThemeProvider } from "@edene/foundations";
import N26 from "../components/offers/N26";
import TradeRepublic from "../components/offers/TradeRepublic";
import Revolut from "../components/offers/Revolut";

const theme = {
	color: "#202D34",
	hover: "#485963",
};

const Links = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Row direction="column" align="center-center" gap={3} noGlutters>
					<Heading size="h4">Compara cuentas online</Heading>

					<N26 />
					<Revolut />
					<TradeRepublic />
				</Row>
			</Container>
		</ThemeProvider>
	);
};

export default Links;
