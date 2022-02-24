import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Container, Row, Text } from "dana-react";

import Layout from "../../components/Layout";

export default function BlogItem({ siteTitle, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>;

	return (
		<Layout pageTitle={`${siteTitle}`}>
			<section className="page-section first-section py-section">
				<Container ph={16} pv={16}>
					<article>
						<Row py={10}>
							<h2>{frontmatter.title}</h2>
							<Text size="h5" mt={4}>
								{frontmatter.date}
							</Text>
						</Row>
						<Row py={10}>
							<ReactMarkdown children={markdownBody} />
						</Row>
					</article>
				</Container>
			</section>
		</Layout>
	);
}

export async function getStaticProps({ ...context }) {
	const { slug } = context.params;

	const content = await import(`../../public/blogs/${slug}.md`);
	const config = await import(`../../siteconfig.json`);
	const data = matter(content.default);

	return {
		props: {
			siteTitle: config.title,
			frontmatter: data.data,
			markdownBody: data.content,
		},
	};
}

export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		const keys = context.keys();
		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

			return slug;
		});
		return data;
	})(require.context("../../public/blogs", true, /\.md$/));

	const paths = blogSlugs.map((slug) => `/blog/${slug}`);

	return {
		paths,
		fallback: false,
	};
}
