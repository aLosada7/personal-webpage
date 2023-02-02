import { serialize } from "next-mdx-remote/serialize";
import NextImage from "next/image";
import { css } from "@emotion/react";
import { Container, Heading, Text, Image, Box } from "@edene/components";
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
						<Text size="small">
							{frontmatter.date} - {frontmatter.readingTime}
						</Text>
						<Heading weight="bold" mt={2}>
							{frontmatter.title}
						</Heading>
						<Heading size="h3" color={grays[3]} mt={2} mb={12}>
							{frontmatter.description}
						</Heading>
						<Box
							css={css`
								position: relative;
								width: 100%;
								height: 500px;
							`}
						>
							<Image component={NextImage} layout="fill" src={`/blogs/${slug}.webp`} />
						</Box>
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
