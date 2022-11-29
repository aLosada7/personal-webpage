import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";

import { Container, Heading } from "@edene/components";
import { grays } from "@edene/foundations";

import getPost from "../api/getPost";
import Layout from "../../components/layout/Layout";
import PostContent from "../../components/blog/PostContent";
import Head from "../../components/seo/Head";

export default function BlogItem({ slug, siteHeading, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>;

	return (
		<Layout pageHeading={`${siteHeading}`}>
			<Head title={`${frontmatter.title} - Alvaro Losada`} />
			<section className="page-section first-section py-section">
				<article>
					<Container pv={2}>
						<Heading size="h3">
							{frontmatter.date} - {frontmatter.readingTime}
						</Heading>
						<Heading weight="bold" mt={4}>
							{frontmatter.title}
						</Heading>
						<Heading size="h2" color={grays[3]} mt={2} mb={12}>
							{frontmatter.description}
						</Heading>
						<Image src={`/blogs/${slug}.webp`} layout="responsive" width={800} height={500} />
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
			slug,
			siteHeading: config.title,
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
