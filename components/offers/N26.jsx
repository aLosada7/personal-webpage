import React from "react";
import { Text, Card, CardSection, CardHeader, Icon } from "@edene/components";
import { text } from "./styles";

const N26 = () => (
	<Card>
		<CardHeader>15€ gratis en N26</CardHeader>

		<CardSection>
			<Text weight="bold">¿Qué es?</Text>

			<Text>
				<a href="https://n26.com/en-es" target="_blank">
					N26
				</a>{" "}
				es un banco de origen alemán considerado el mejor banco del mundo en 2023. Tiene sede y IBAN español.
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">¿Cómo conseguir dinero por unirte?</Text>

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

			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				N26 te paga el 2.26% TAE por tu dinero de forma mensual.
			</Text>
			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				El dinero esta siempre disponible y no tienen ninguna comisión ni obligación de permanencia.
			</Text>
			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				Hasta 100.000€ tu dinero está protegido por el Fondo de Garantía de Depósitos de la Unión Europea.
			</Text>
		</CardSection>
	</Card>
);

export default N26;
