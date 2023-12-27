import React from "react";
import SocialNetworks from "../components/layout/SocialNetworks";
import Link from "next/link";
import { Heading, Text, Row, Container, Box, Button } from "@edene/components";
import { ThemeProvider } from "@edene/foundations";

const theme = {
	color: "#202D34",
	hover: "#485963",
};

const Links = () => {
	return (
		<Row direction="column" align="start-center" gap={4} noGlutters>
			<Link href="/">
				<a role="link" aria-label="home" className="navbar-brand">
					alvaro losada
				</a>
			</Link>

			<SocialNetworks />

			<ThemeProvider theme={theme}>
				<Container>
					<Row direction="column" align="center-center" gap={3} noGlutters>
						<Heading size="h2">Sobre mí</Heading>
						<Button size="small" as="a" href="https://alvarolosada.com">
							Mi sitio web
						</Button>
					</Row>
					<Row direction="column" align="center-center" gap={3} noGlutters>
						<Box>
							<Heading size="h2" textAlign="center">
								Marketing de afiliados
							</Heading>
							<Text textAlign="center">Con estas ofertas los dos ganamos</Text>
						</Box>
						<Button size="small" as="a" href="https://n26.com/r/alvarol9848">
							10€ gratis registrandote en N26
						</Button>
					</Row>
				</Container>
			</ThemeProvider>
		</Row>
	);
};

export default Links;
