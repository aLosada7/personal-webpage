import Link from "next/link";
import Markdown from "markdown-to-jsx";

import { Container, Row, Col } from "@edene/components";

const ContributionItem = ({ index, contribution }) => {
	let interactiveDemo = null;
	let sourceCode = null;
	let sourceCodeAPI = null;

	if (contribution.live) {
		interactiveDemo = (
			<div>
				<Link href={contribution.live}>
					<a role="link" target="_blank" aria-label={contribution.live}>
						Interactive Demo
					</a>
				</Link>
			</div>
		);
	}

	if (contribution.repository) {
		sourceCode = (
			<div>
				<Link href={contribution.repository}>
					<a role="link" target="_blank" aria-label={contribution.repository}>
						Source Code
					</a>
				</Link>
			</div>
		);
	}

	if (contribution.repositoryAPI) {
		sourceCodeAPI = (
			<div>
				<Link href={contribution.repositoryAPI}>
					<a role="link" target="_blank" aria-label={contribution.repositoryAPI}>
						Source Code (API)
					</a>
				</Link>
			</div>
		);
	}

	return (
		<Container>
			<Row>
				<Col
					md={12}
					align="horizontal-center"
					className={`col-8 ${
						index % 2 === 0 ? " col-offset-4 order-1 " : "order-2"
					} order-mobile-1 col-mobile-24 col-offset-mobile-0`}
				>
					<img src={`/contributions/${contribution.lang}.png`} alt={contribution.name} />
				</Col>
				<Col
					md={12}
					direction="column"
					align="horizontal-center"
					className={`col-8 ${
						index % 2 === 0 ? "order-2" : "col-offset-4 order-1"
					} order-mobile-2 col-mobile-24 col-offset-mobile-0 contribution-text`}
				>
					<h3 className="mt-8 mb-8">{contribution.name}</h3>
					<p className="mt-8 mb-8 color-light-black">
						<Markdown>{contribution.smallDescription}</Markdown>
					</p>
					{interactiveDemo}
					{sourceCode}
					{sourceCodeAPI}
				</Col>
			</Row>
		</Container>
	);
};

export default ContributionItem;
