import Link from "next/link";

import Layout from "../components/Layout";
import blogs from "../blogs.json";

export default function Blog() {
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
			<section className="page-section py-section">
				<div className="container">
					{
						<div className="row blog-summary-entry-list">
							{blogs.map((blog) => (
								<div className="col-8 col-offset-0 col-mobile-24" key={blog.slug}>
									<div className="blog-summary-entry mb-3">
										<article className="blog-entry">
											<img
												className="mb-8"
												src={`/blogs/${blog.slug}.jpeg`}
												alt={blog.headline}
											/>
											<span className="blog-entry-date mb-8">{blog.date}</span>

											<Link href={{ pathname: `/blog/${blog.slug}` }}>
												<strong className="blog-entry-title">
													<a>{blog.headline}</a>
												</strong>
											</Link>

											<p>{blog.description}</p>

											<Link href={{ pathname: `/blog/${blog.slug}` }}>
												<a className="blog-entry-read-more">Read More</a>
											</Link>
										</article>
									</div>
								</div>
							))}
						</div>
					}
				</div>
			</section>
		</Layout>
	);
}
