import React from "react";
import { Text, Card, CardSection, CardHeader } from "@edene/components";

const Voltio = () => (
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
);

export default Voltio;
