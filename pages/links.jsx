import React from "react";
import SocialNetworks from "../components/layout/SocialNetworks";
import Link from "next/link";
import { Text, Card, Heading, Row, CardSection, CardHeader, Container } from "@edene/components";
import { ThemeProvider } from "@edene/foundations";
import { css } from "@emotion/react";

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
						<Heading size="h4">Ofertas</Heading>

						<Card>
							<CardHeader>15€ gratis en N26</CardHeader>
							<CardSection>
								<Text weight="bold">¿Qué es?</Text>
								<Text>
									<a href="https://n26.com/en-es" target="_blank">
										N26
									</a>{" "}
									es un banco de origen alemán considerado el mejor banco del mundo en 2023. Tiene
									sede y IBAN español.
								</Text>
							</CardSection>
							<CardSection>
								<Text weight="bold">¿Cómo conseguir el descuento?</Text>
								<Text>
									Abre una cuenta pulsando{" "}
									<a href="https://n26.com/r/alvarol9848" target="_blank">
										aquí
									</a>{" "}
									y gasta 15€ con la tarjeta. Después ambos recibiremos 15€ gratis.
								</Text>
							</CardSection>
							<CardSection>
								<Text weight="bold">Ventajas extra</Text>
								<Text>
									N26 te paga el 2.26% TAE por tu dinero de forma mensual. El dinero esta siempre
									disponible y no tienen ninguna comisión ni obligación de permanencia.
								</Text>
							</CardSection>
						</Card>
						<Card>
							<CardHeader>25€ gratis en Voltio</CardHeader>
							<CardSection>
								<Text weight="bold">¿Qué es?</Text>
								<Text>
									<a href="https://voltio.com" target="_blank">
										Voltio
									</a>{" "}
									te permite alquilar un coche para moverte dentro de Madrid.
								</Text>
							</CardSection>
							<CardSection>
								<Text weight="bold">¿Cómo conseguir el descuento?</Text>
								<Text>
									Registrate utilizando el código <b>ALVAROL5</b>. Puedes hacerlo pulsando{" "}
									<a href="https://app.voltio.com/iMut/n6lsaz9r" target="_blank">
										aquí
									</a>{" "}
									.Ambos recibiremos 25€ de crédito gratuito en la app cuando termines el registro.
								</Text>
							</CardSection>
						</Card>
					</Row>
				</Container>
			</ThemeProvider>
		</Row>
	);
};

export default Links;
