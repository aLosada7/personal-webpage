import React from "react";
import { Text, Card, CardSection, CardHeader } from "@edene/components";

const ShareNow = () => (
	<Card>
		<CardHeader>10€ gratis en Share Now</CardHeader>
		<CardSection>
			<Text weight="bold">¿Qué es?</Text>
			<Text>
				<a href="https://www.share-now.com/es/en/madrid/" target="_blank">
					Share Now
				</a>{" "}
				te permite alquilar un coche para moverte dentro de Madrid.
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">¿Cómo conseguir el descuento?</Text>
			<Text>
				Registrate utilizando el código <b>MGM-HTE5-FCNE-X48L-UPPH</b> o directamente desde{" "}
				<a
					href="https://www.share-now.com/ES/en/registration/personal-data/?pc=MGM-HTE5-FCNE-X48L-UPPH"
					target="_blank"
				>
					aquí
				</a>{" "}
				.Ambos recibiremos 10 de crédito gratuito en la app al terminar el registro.
			</Text>
		</CardSection>
	</Card>
);

export default ShareNow;
