import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { css } from "@emotion/react";
import {
	Container,
	Row,
	Col,
	Badge,
	Text,
	SideNav,
	SideNavItems,
	SideNavPrincipal,
	SideNavItem,
	Image,
	Heading,
	Group,
	Box,
	Stack,
} from "@edene/components";
import { until } from "@edene/foundations";

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
				<Box mt={2}>
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
	<Link href={{ pathname: `/blog/${blog.slug}` }}>
		<Box
			component="article"
			mb={4}
			css={css`
				width: 100%;
			`}
		>
			<Box
				mb={2}
				css={css`
					position: relative;
					height: 304px;
				`}
			>
				<Image component={NextImage} layout="fill" src={`/blogs/${blog.slug}.webp`} alt={blog.slug} />
			</Box>
			<Text size="xsmall">{blog.date}</Text>
			<Heading size="h3" mb={1}>
				{blog.headline}
			</Heading>
			<Text size="small">{blog.description}</Text>
			<Tags tags={blog.tags} />
		</Box>
	</Link>
);

const AdditionalFeaturedPost = ({ blog }) => (
	<Link href={{ pathname: `/blog/${blog.slug}` }}>
		<Box component="article" mb={4}>
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
						<Image component={NextImage} layout="fill" src={`/blogs/${blog.slug}.webp`} alt={blog.slug} />
					</Box>
				</Col>
				<Col md={12} direction="column">
					<Text size="xsmall">{blog.date}</Text>
					<Heading size="h3" mb={1}>
						{blog.headline}
					</Heading>
					<Text size="small">{blog.description}</Text>
					<Tags tags={blog.tags} />
				</Col>
			</Row>
		</Box>
	</Link>
);

const Post = ({ blog }) => (
	<Link href={{ pathname: `/blog/${blog.slug}` }}>
		<Box component="article" mb={4}>
			<Box
				mb={2}
				css={css`
					position: relative;
					height: 194px;
				`}
			>
				<Image
					component={NextImage}
					layout="fill"
					src={`/blogs/${blog.slug}.webp`}
					alt="Picture of a mountain"
				/>
			</Box>
			<Text size="xsmall">{blog.date}</Text>
			<Heading size="h3" mb={1}>
				{blog.headline}
			</Heading>
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
				<div className="container">
					<div className="row">
						<div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
							<h2 className="page-title">
								<strong>Blog.</strong>
							</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section py-section featured-blog-posts-section">
				<Container ph={12}>
					<Heading size="h2" mb={4}>
						Featured blog posts
					</Heading>
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
			<section className="page-section py-section all-blog-posts-section">
				<Container pv={8} ph={12}>
					<Heading size="h2" mb={4}>
						All blog posts
					</Heading>
					<Row>
						{/* <Col md={8} lg={6} css={noPadding}>
							<SideNav aria-label="Side navigation" mobileWidth="full">
								<SideNavItems hideIcon activeColor="#F1EDF9" hoverColor="transparent">
									<SideNavPrincipal>
										{blogCategories.map((category) => (
											<SideNavItem
												key={category.slug}
												isActive={category === activeBlogCategory}
												onClick={() => setActiveBlogCategory(category)}
												css={css`
													border-radius: 8px;

													:last-child {
														margin-bottom: 0.7rem;
													}
												`}
											>
												{category}
											</SideNavItem>
										))}
									</SideNavPrincipal>
								</SideNavItems>
							</SideNav>
						</Col>
						<Col md={16} lg={18}>
							<Row> */}
						{blogsFiltered.map((blog) => (
							<Col md={12} lg={8} direction="column" key={blog.slug}>
								<Post blog={blog} />
							</Col>
						))}
						{/* </Row>
						</Col> */}
					</Row>
				</Container>
			</section>
		</Layout>
	);
}
