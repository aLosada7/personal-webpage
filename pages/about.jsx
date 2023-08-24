import { Row, Text } from "@edene/components";

import Layout from "../components/layout/Layout";
import Head from "../components/seo/Head";

export default function About() {
	return (
		<Layout>
			<Head title="About - Alvaro Losada" />
			<section className="page-section first-section">
				<div className="container">
					<div className="row">
						<div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
							<h2 className="page-title">
								<strong>About.</strong>
							</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section">
				<div className="container about">
					<div className="row">
						<div className="col-12 col-mobile-24 col-offset-mobile-0">
							<img
								src="/aboutPhoto.webp"
								alt="Photo of Alvaro working in Visual Studio Code"
								style={{ width: "-webkit-fill-available" }}
							/>
						</div>
						<div className="col-12 col-mobile-24 col-offset-mobile-0">
							<Row direction="column" gap={3}>
								<Text weight="bold">
									The truth is that for a long time in my adolescence, it was clear to me that I
									wanted to become an Engineer some day. I have to confess I were thinking for a long
									time about studying Biotechnology, but there is nothing wrong with that. A few
									months after starting university, I began to understand this journey would be a lot
									of fun.
								</Text>
								<Text weight="bold">
									In 2018, I was luckily selected to be part of Indra's team in León for a whole year.
									During this internship, I was able to learn more about the frontend and this is why
									just after finishing my studies, I decided to move to Oviedo and course a Web
									Engineering’s Master’s degree. For about three years I lived in this beautiful city,
									I made great friends, and I also had the opportunity to work in which, thinking
									about it now, I believe that at that moment I began to love, frontend development.
								</Text>
								<Text weight="bold">
									After all this time, I decided to move back to León, the city were I was born, and
									being there I had the opportunity to work directly for a product for the first time.
									Emais is a company based in A Coruña, Spain, but me and my flatmate worked for them
									for more than a year. I contributed to the succesful migration of the company’s
									highest-impact product and also were promoted to Front-End team leader after a few
									months there.
								</Text>
								<Text weight="bold">
									It was a suprise for me when eDreams, an app I had used multiple times to organize
									my dream trips, gave me an opportunity to journey together with great professionals
									while working on the new accommodations funnel. It is now enabling thousands of
									customers but also me to explore, grow and discover.
								</Text>
								<Text weight="bold">My story will continue.</Text>
							</Row>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
