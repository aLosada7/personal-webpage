import { serialize } from "next-mdx-remote/serialize";

import { Container, Text } from "@edene/components";

import getPost from "../api/getPost";
import Layout from "../../components/layout/Layout";
import PostContent from "../../components/blog/PostContent";

export default function BlogItem({ siteTitle, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>;

	console.log(markdownBody);

	return (
		<Layout pageTitle={`${siteTitle}`}>
			<section className="page-section first-section py-section">
				<article>
					<Container pv={6}>
						<h2>{frontmatter.title}</h2>
						<Text size="h5" mt={4}>
							{frontmatter.date} - {frontmatter.readingTime}
						</Text>
						<PostContent content={markdownBody} />
					</Container>
				</article>
			</section>
		</Layout>
	);
}

export async function getStaticProps({ ...context }) {
	const { slug } = context.params;

	const post = getPost(slug);
	const config = await import(`../../siteconfig.json`);
	const mdxSource = await serialize(post.content);

	return {
		props: {
			siteTitle: config.title,
			frontmatter: post.frontmatter,
			markdownBody: mdxSource,
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
	})(require.context("../../public/blogs", true, /\.mdx$/));

	const paths = blogSlugs.map((slug) => `/blog/${slug.substring(0, slug.length - 1)}`);

	return {
		paths,
		fallback: false,
	};
}
