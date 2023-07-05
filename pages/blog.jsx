import { useState, useEffect } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { css } from "@emotion/react";
import { Container, Row, Col, Badge, Text, Link, Image, Heading, Group, Box } from "@edene/components";

import Head from "../components/seo/Head";
import Layout from "../components/layout/Layout";
import blogs from "../blogs.json";

const FEATURE_MAIN_POST = {
	id: 8,
	headline: "Creating a component library. The Alert component",
	description: "Join me in the new series of blogs which will build a complate reusable components library in React",
	slug: "creating-a-component-library-the-alert-component",
	tags: ["React"],
	date: "November 19th 2022",
};
const FEATURE_ADDITIONAL_BLOG_1 = {
	id: 7,
	headline: "Debugging CSS in Storybook without DevTools",
	description: "Three addons that will save you some time when debugging your application",
	slug: "debugging-css-in-storybook-without-devtools",
	tags: ["React", "CSS"],
	date: "September 27th 2022",
};
const FEATURE_ADDITIONAL_BLOG_2 = {
	id: 6,
	headline: "Efficient list rendering in React using Virtualization",
	description: "Virtualize large lists can improve the performance of your application",
	slug: "efficient-list-rendering-in-react-using-virtualization",
	tags: ["React", "Performance"],
	date: "September 22th 2022",
};

const noPadding = css`
	padding: 0;
`;

const Tags = ({ tags }) => {
	return (
		<Group>
			{(tags || []).map((tag) => (
				<Box key={tag} mt={2}>
					<Badge
						key={tag}
						color="gray"
						css={css`
							font-weight: 500;
						`}
					>
						{tag}
					</Badge>
				</Box>
			))}
		</Group>
	);
};

const FeaturedPost = ({ blog }) => (
	<Link as={NextLink} href={{ pathname: `/blog/${blog.slug}` }}>
		<Box
			as="article"
			mb={4}
			css={css`
				cursor: pointer;
			`}
		>
			<Box
				mb={2}
				css={css`
					position: relative;
					height: 304px;
				`}
			>
				<Image as={NextImage} layout="fill" src={`/blogs/${blog.slug}.webp`} alt={blog.slug} />
			</Box>
			<Text size="xsmall">{blog.date}</Text>
			<Heading size="h3">{blog.headline}</Heading>
			<Text size="small">{blog.description}</Text>
			<Tags tags={blog.tags} />
		</Box>
	</Link>
);

const AdditionalFeaturedPost = ({ blog }) => (
	<Link as={NextLink} href={{ pathname: `/blog/${blog.slug}` }}>
		<Box
			as="article"
			mb={4}
			css={css`
				cursor: pointer;
			`}
		>
			<Row>
				<Col md={12}>
					<Box
						mb={2}
						css={css`
							position: relative;
							width: 100%;
							height: 194px;
						`}
					>
						<Image as={NextImage} layout="fill" src={`/blogs/${blog.slug}.webp`} alt={blog.slug} />
					</Box>
				</Col>
				<Col md={12} direction="column">
					<Text size="xsmall">{blog.date}</Text>
					<Heading size="h3">{blog.headline}</Heading>
					<Text size="small">{blog.description}</Text>
					<Tags tags={blog.tags} />
				</Col>
			</Row>
		</Box>
	</Link>
);

const Post = ({ blog }) => (
	<Link as={NextLink} href={{ pathname: `/blog/${blog.slug}` }}>
		<Box
			as="article"
			mb={4}
			css={css`
				cursor: pointer;
			`}
		>
			<Box
				mb={2}
				css={css`
					position: relative;
					height: 194px;
				`}
			>
				<Image as={NextImage} layout="fill" src={`/blogs/${blog.slug}.webp`} alt="Picture of a mountain" />
			</Box>
			<Text size="xsmall">{blog.date}</Text>
			<Heading size="h3">{blog.headline}</Heading>
			<Text size="small">{blog.description}</Text>
			<Tags tags={blog.tags} />
		</Box>
	</Link>
);

export default function Blog() {
	const [activeBlogCategory, setActiveBlogCategory] = useState("All categories");
	const [blogCategories, setBlogCategories] = useState([]);
	const [blogsFiltered, setBlogsFiltered] = useState([]);

	const getBlogCategories = () => {
		let blogCategories = blogs.reduce((result, blog) => {
			const blogCategories = blog.tags.map((tech) => {
				if (tech && !result.includes(tech)) {
					return tech;
				}
			});
			const newTechs = result.concat(blogCategories);
			return newTechs.filter((element) => element != null);
		}, []);
		return ["All categories", ...blogCategories.sort((a, b) => a.localeCompare(b))];
	};

	useEffect(() => {
		setBlogCategories(getBlogCategories());
		setBlogsFiltered(blogs);
	}, [blogs]);

	useEffect(() => {
		const blogsList =
			activeBlogCategory === "All categories"
				? blogs
				: blogs.filter((blog) => blog.tags.includes(activeBlogCategory));
		setBlogsFiltered(blogsList.sort((a, b) => b.id - a.id));
	}, [activeBlogCategory]);

	return (
		<Layout>
			<Head title="Blog - Alvaro Losada" />
			<section className="page-section first-section py-section">
				<Container>
					<Box pb={2}>
						<Heading size="h2">Featured blog posts</Heading>
					</Box>
					<Row>
						<Col lg={12}>
							<FeaturedPost blog={FEATURE_MAIN_POST} />
						</Col>
						<Col lg={12} direction="column">
							<AdditionalFeaturedPost blog={FEATURE_ADDITIONAL_BLOG_1} />
							<AdditionalFeaturedPost blog={FEATURE_ADDITIONAL_BLOG_2} />
						</Col>
					</Row>
				</Container>
			</section>
			<Container>
				<Box pb={2}>
					<Heading size="h2">All blog posts</Heading>
				</Box>
				<Row>
					{blogsFiltered.map((blog) => (
						<Col md={12} lg={8} direction="column" key={blog.slug}>
							<Post blog={blog} />
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
}
