import Link from "next/link";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

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
	Title,
} from "@edene/components";
import { until } from "@edene/foundations";

import Layout from "../components/layout/Layout";
import blogs from "../blogs.json";

const noPadding = css`
	padding: 0;
`;

const noMargin = css`
	margin: 0;
`;

const colorBlack = css`
	span {
		color: black;
	}
`;

const Tags = ({ tags }) => {
	return (
		<>
			{tags.map((tag) => (
				<Badge
					key={tag}
					color="gray"
					text={tag}
					cssOverrides={css`
						margin-top: 0.5rem;
					`}
				/>
			))}
		</>
	);
};

const FeaturedBlogPost = ({ blog }) => (
	<Link href={{ pathname: `/blog/${blog.slug}` }}>
		<article>
			<Image src={`/blogs/${blog.slug}.webp`} size="d" alt="Picture of a mountain" />
			<Text size="xxsm" mt={2}>
				{blog.date}
			</Text>
			<Title size="h3">{blog.headline}</Title>
			<Text size="sm" mt={2}>
				{blog.description}
			</Text>
			<Tags tags={blog.tags} />
		</article>
	</Link>
);

const FeaturedAdditonalBlogPost = ({ blog }) => (
	<Link href={{ pathname: `/blog/${blog.slug}` }}>
		<article>
			<Row
				cssOverrides={css`
					${until.desktop} {
						margin: 0;
					}
				`}
			>
				<Col
					md={12}
					cssOverrides={css`
						padding: 0;
					`}
				>
					<Image
						src={`/blogs/${blog.slug}.webp`}
						alt="Picture of a mountain"
						size="e"
						cssOverrides={css`
							margin-bottom: 0.5rem;
						`}
					/>
				</Col>
				<Col
					md={12}
					direction="column"
					cssOverrides={css`
						${until.phablet} {
							padding: 0;
						}
						margin-bottom: 1.5rem;
					`}
				>
					<Text size="xxsm">{blog.date}</Text>
					<Title>{blog.headline}</Title>
					<Text size="sm" mt={2}>
						{blog.description}
					</Text>
					<Tags tags={blog.tags} />
				</Col>
			</Row>
		</article>
	</Link>
);

const BlogAllSection = ({ blog }) => {
	return (
		<Col
			md={12}
			lg={8}
			direction="column"
			cssOverrides={css`
				margin-bottom: 1.5rem;
				cursor: pointer;
			`}
		>
			<Link href={{ pathname: `/blog/${blog.slug}` }}>
				<article>
					<Image src={`/blogs/${blog.slug}.webp`} alt="Picture of a mountain" />
					<Text size="xxsm" mt={2}>
						{blog.date}
					</Text>
					<Title size="h5">{blog.headline}</Title>
					<Text size="sm" mt={2}>
						{blog.description}
					</Text>
					<Tags tags={blog.tags} />
				</article>
			</Link>
		</Col>
	);
};

export default function Blog() {
	const [activeBlogCategory, setActiveBlogCategory] = useState("All categories");
	const [blogCategories, setBlogCategories] = useState([]);
	const [blogsFiltered, setBlogsFiltered] = useState([]);

	const getBlogCategories = () => {
		let blogCategories = blogs.reduce(
			(result, blog) => {
				const blogCategories = blog.tags.map((tech) => {
					if (tech && !result.includes(tech)) {
						return tech;
					}
				});
				const newTechs = result.concat(blogCategories);
				return newTechs.filter((element) => element != null);
			},
			["All categories"]
		);
		return blogCategories.sort();
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
		setBlogsFiltered(blogsList);
	}, [activeBlogCategory]);

	return (
		<Layout>
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
					<Title size="h4" mb={4}>
						Featured blog posts
					</Title>
					<Row>
						<Col
							lg={12}
							direction="column"
							cssOverrides={css`
								margin-bottom: 1.5rem;
								cursor: pointer;
							`}
						>
							<FeaturedBlogPost blog={blogs[0]} />
						</Col>
						<Col
							lg={12}
							direction="column"
							cssOverrides={css`
								margin-bottom: 1.5rem;
								cursor: pointer;
							`}
						>
							<FeaturedAdditonalBlogPost blog={blogs[1]} />
							<FeaturedAdditonalBlogPost blog={blogs[2]} />
						</Col>
					</Row>
				</Container>
			</section>
			<section className="page-section py-section all-blog-posts-section">
				<Container pv={8} ph={12}>
					<Title size="h4" mb={4}>
						All blog posts
					</Title>
					<Row>
						<Col md={8} lg={6} cssOverrides={noPadding}>
							<SideNav aria-label="Side navigation" mobileWidth="full">
								<SideNavItems hideIcon activeColor="#F1EDF9" hoverColor="transparent">
									<SideNavPrincipal title="Blog categories" cssOverrides={[noMargin, colorBlack]}>
										{blogCategories.map((category) => {
											console.log(category === activeBlogCategory);
											return (
												<SideNavItem
													key={category.slug}
													isActive={category === activeBlogCategory}
													onClick={() => setActiveBlogCategory(category)}
													// badge={<Badge color="gray" text="3" />}
													cssOverrides={css`
														border-radius: 8px;

														:last-child {
															margin-bottom: 0.7rem;
														}
													`}
												>
													{category}
												</SideNavItem>
											);
										})}
									</SideNavPrincipal>
								</SideNavItems>
							</SideNav>
						</Col>
						<Col md={16} lg={18}>
							<Row>
								{blogsFiltered.reverse().map((blog) => (
									<BlogAllSection blog={blog} key={blog.slug} />
								))}
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
}
