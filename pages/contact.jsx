import { Text } from "dana-react";

import Layout from "../components/layout/Layout";

export default function Contact() {
	return (
		<Layout>
			<section className="page-section first-section">
				<div className="container">
					<div className="row">
						<div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
							<h2 className="page-title">
								<strong>Contact.</strong>
							</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section">
				<div className="container contact" style={{ maxWidth: "34em", textAlign: "center" }}>
					<Text>
						Get in touch through my social media, or sending a message to my e-mail{" "}
						<i>(aldc30sc@gmail.com)</i>
					</Text>
				</div>
			</section>
		</Layout>
	);
}
