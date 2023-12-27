import React from "react";
import { Text, Card, CardSection, CardHeader } from "@edene/components";

const iGraal = () => (
	<Card>
		<CardHeader>3€ gratis en iGraal</CardHeader>
		<CardSection>
			<Text weight="bold">¿Qué es?</Text>
			<Text>
				<a href="https://es.igraal.com" target="_blank">
					iGraal
				</a>{" "}
				es una aplicación para obtener cashbacks por tus compras.
			</Text>
		</CardSection>
		<CardSection>
			<Text weight="bold">¿Cómo conseguir el descuento?</Text>
			<Text>
				Registrate utilizando{" "}
				<a
					href="https://es.igraal.com/app-share?pid=copy_link&c=sponsorship&godfather=AG_62ebd88ebdde6"
					target="_blank"
				>
					este
				</a>{" "}
				enlace y ambos recibiremos 3€ extra cuando consigas tu primer cashback.
			</Text>
		</CardSection>
	</Card>
);

export default iGraal;
