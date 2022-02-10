import Layout from "../components/Layout";

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
						<div className="col-24">
							<p>
								The truth is that for a long time in my adolescence, it was clear to me that I wanted to
								be an engineer, and I also liked Computer Science, although I did not really know
								everything that was hidden behind it. At the time, it was not clear to me whether I
								should choose Biotechnology or Computer Engineering, and it is now when a few years
								after finishing my degree at the University of León, I begin to be clear that I made the
								right choice.
							</p>
							<p>
								In 2018 I graduated in Computer Engineering, and I decided to move to Oviedo to do a
								master's degree and thus finish my training process (also to live with my friends,
								things as they are).
							</p>
							<p>
								After years of getting a base, I began to be clear about what I wanted to do. Thanks to
								Indra, shortly after I got my first job, I still find myself today. It was a great
								opportunity, in which, in addition to helping me train, they allowed me to work on
								various projects of already significant size. We work with Angular, HTML, CSS or Node.
								And from here, everything went forward.
							</p>
							<p>
								I met new colleagues and technologies, and I became more and more interested in
								fundamental aspects and not so much of what my usual job is. After a while, my head
								began to accept new concepts that today are my writing software fundamentals. I try to
								follow design principles and programming disciplines to write clean, testable and
								maintainable code in my day-to-day life.
							</p>
							<p>
								New opportunities arose, and with them, I was able to work with React, Redux, Typescript
								and more. Today I continue working with the same company, eager to continue learning and
								growing.
							</p>
							<p>
								After almost 2 years I have joined a new company, Emais, where as a Front End Software
								Engineer I face new challenges. I am also going to start writing my own blog about
								complex concepts and stuff regarding front end development world.
							</p>
							<p>My story will continue.</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
