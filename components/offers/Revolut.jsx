import React from "react";
import { Text, Card, CardSection, CardHeader, Icon } from "@edene/components";
import { text } from "./styles";

const TradeRepublic = () => (
	<Card>
		<CardHeader>Revolut</CardHeader>

		<CardSection>
			<Text weight="bold">¿Qué es?</Text>

			<Text>
				<a href="https://www.revolut.com" target="_blank">
					Revolut
				</a>{" "}
				es una de las app financieras más conocidas del mundo.
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">¿Cómo conseguir dinero por unirte?</Text>

			<Text>
				Unete desde{" "}
				<a
					href="https://revolut.com/referral/?referral-code=alvaroy0ip!DEC1-23-VR-ES-PROMPT-AE"
					target="_blank"
				>
					este
				</a>{" "}
				enlace y realiza 3 compras de almenos 5€ para recibir un reward aleatorio de entre 10€ y 200€
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">Ventajas extra</Text>

			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				Revolut paga{" "}
				<a href="https://www.revolut.com/es-ES/savings/" target="_blank">
					intereses diarios
				</a>{" "}
				de hasta el 5.34% de RDTO.
			</Text>
			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				El cambio a moneda extranjera es super sencillo
			</Text>
			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				IBAN español
			</Text>
		</CardSection>
	</Card>
);

export default TradeRepublic;
