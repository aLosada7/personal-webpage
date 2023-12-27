import React from "react";
import { Text, Card, CardSection, CardHeader, Icon } from "@edene/components";
import { text } from "./styles";

const TradeRepublic = () => (
	<Card>
		<CardHeader>Trade Republic</CardHeader>

		<CardSection>
			<Text weight="bold">¿Qué es?</Text>

			<Text>
				<a href="https://traderepublic.com/es-es" target="_blank">
					Trade Republic
				</a>{" "}
				es uno de los bancos más conocidos en alemania
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">¿Cómo conseguir dinero por unirte?</Text>

			<Text>
				Desafortunadamente no dan dinero por unirse. Puedes utilizar el código <b>KNHB7C37</b> al darte de alta
				y conseguir hasta un 8% de interés en el mes de enero de 2024 y 10€ en stocks.
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">Ventajas extra</Text>

			<Text css={text}>
				<Icon color="green" mr={1}>
					done
				</Icon>
				Trade Republic paga el 4% TAE por tu dinero mensualmente, aunque los intereses se calculan diariamente.
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
			<Text css={text}>
				<Icon color="red" mr={1}>
					close
				</Icon>
				No hacen retención sobre los intereses, por lo que tendrás que añadirlos manualmente a tu declaración.
			</Text>
			<Text css={text}>
				<Icon color="red" mr={1}>
					close
				</Icon>
				Su aplicación solo está disponible en inglés.
			</Text>
		</CardSection>
	</Card>
);

export default TradeRepublic;
