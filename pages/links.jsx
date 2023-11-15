import React from "react";
import SocialNetworks from "../components/layout/SocialNetworks";
import Link from "next/link";
import { Button, Container, Heading, Row } from "@edene/components";
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

			<Row direction="column" align="center-center" gap={3} noGlutters>
				<Heading size="h4">Ofertas</Heading>

				<ThemeProvider theme={theme}>
					<Button size="small" as="a" href="https://app.voltio.com/iMut/n6lsaz9r" target="_blank">
						20€ gratis en Voltio con el código ALVAROL5
					</Button>
					<Button size="small" as="a" href="https://n26.com/r/alvarol9848" target="_blank">
						10€ gratis en N26 si te abres una cuenta
					</Button>
				</ThemeProvider>
			</Row>
		</Row>
	);
};

export default Links;
