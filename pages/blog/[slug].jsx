import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";

export default function BlogItem({ siteTitle, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>;

	return (
		<Layout pageTitle={`${siteTitle}`}>
			<section className="page-section first-section py-section">
				<div className="container">
					<div className="row">
						<div className="blog-image text-center mb-4">
							<div className="col-md-12">Image</div>
						</div>
					</div>
					<div className="row">
						<article>
							<h1>{frontmatter.title}</h1>
							<p>{frontmatter.date}</p>
							<div>
								<ReactMarkdown children={markdownBody} />
							</div>
						</article>
					</div>
				</div>
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
