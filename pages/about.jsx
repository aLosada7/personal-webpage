import { Text } from "@edene/components";

import Layout from "../components/layout/Layout";

export default function About() {
	return (
		<Layout>
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
							<img src="/aboutPhoto.jpg" style={{ width: "-webkit-fill-available" }} />
						</div>
						<div className="col-12 col-mobile-24 col-offset-mobile-0">
							<Text mt={4} mb={4}>
								The truth is that for a long time in my adolescence, it was clear to me that I wanted to
								become an Engineer some day. Computer Science sounded good to me, although I did not
								really know what it was about until I went to the university. Before this, I thought for
								several time about studying Biotechnology, which I discarded when it was time to choose.
								It took me a few months after starting my studies in Computer Science to know I had made
								the right decision.
							</Text>
							<Text mt={4} mb={4}>
								In 2018, after four years in the university, including a last year internship at Indra I
								graduated in Computer Engineering. That summer I decided to move to Oviedo to do a Web
								Engineering’s Master’s degree and thus finish my training process (I wanted to live with
								some friends too). This decision was motivated after the year working with great
								professionals at Indra, who showed me how wide is this world. I particularly liked
								working on web applications, creating one to monitor Jira projects life cycle for my
								thesis.
							</Text>
							<Text mt={4} mb={4}>
								Doing this course all my doubts flew away and I was certain about what I wanted to do.
								Thanks to Indra, shortly after they offered me a full-time job, where I helped different
								teams to maintain and develop some web and mobile applications. I worked primarily with
								Typescript, Angular and CSS but I also have the chance to use React, Ionic or Node.
							</Text>
							<Text mt={4} mb={4}>
								Following months of hard work, I started focusing on design principles and programming
								disciplines to write clean, testable and maintainable code which I believed was
								necessary to keep growing as a professional.
							</Text>
							<Text mt={4} mb={4}>
								It was After almost 2 years I have joined a new company, Emais, where as a Front End
								Software Engineer I face new challenges. Here I achieved my biggest accomplishment: the
								migration of the company’s highest-impact product project to a monorepo architecture for
								source code management. It has been a completely success, providing a much more scalable
								project, which is also much easier to maintain and work with. After one year working at
								the company I have been appointed Front-End Team Leader, which means a lot to me. I want
								to work harder than ever to continue to evolve as a professional.
							</Text>
							<Text mt={4} mb={4}>
								I have also started my own blog where I talk about topics like clean code, UI
								architecture, performant tools and other stuff regarding front end development.
							</Text>
							<Text mt={4} mb={4}>
								My story will continue.
							</Text>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
