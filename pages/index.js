import Link from "next/link";
import NextImage from "next/image";

import { Image, Text, Heading } from "@edene/components";

import HomeHeader from "../components/layout/HomeHeader";
import Layout from "../components/layout/Layout";
import Head from "../components/seo/Head";

export default function Home() {
	return (
		<Layout>
			<Head title="Alvaro Losada" />
			<HomeHeader />
			<section className="page-section">
				<div className="container about">
					<div className="row">
						<div className="col-8 col-offset-4 col-mobile-24 col-offset-mobile-0">
							<div className="about-left">
								<Heading size="h3" mt={8} mb={8}>
									Hey, I'm Alvaro.
								</Heading>
								<div className="text mt-16 mb-16">
									<Text mt={4} mb={4}>
										I’m a Front-End Engineer living and working in Madrid, Spain.
									</Text>
									<Text mt={4} mb={4}>
										I work daily on building better and elegant software through writing clean,
										testable and maintainable code.
									</Text>
								</div>
								<div className="button-wrrapper mt-xxs mb-xs">
									<Link href="/about">
										<a role="link" className="button buttons-common grey-button">
											Learn More
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-8 col-mobile-24 col-offset-mobile-0">
							<div className="about-img-wrapper">
								<Image
									component={NextImage}
									src="/alvaro.webp"
									width="280"
									height="375"
									alt="Alvaro profile picture"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*<section className="page-section entries">
                <div className="container">
                    <div className="row justify-content-start ">
                    {blogItems.map((blog) => (
                        <div className="col-8 col-mobile-24" key={blog.slug}>
                            <div className="entry mb-3">
                                <Link as={`/blog/${blog.slug}`} href="/blog/[id]">
                                    <div className="main-image">
                                        <Image
                                            layout="responsive"
                                            src={blog.image[0].name}
                                            width={300}
                                            height={248}
                                            alt={blog.Headline}
                                        />
                                        <Link as={`/blog/${blog.slug}`} href="/blog/[id]"><strong>{blog.Headline}</strong></Link>
                                        <Link as={`/blog/${blog.slug}`} href="/blog/[id]">{blog.date}</Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>*/}
		</Layout>
	);
}

/*export async function getStaticProps() {
    const blogItems = await fetchFromCMS('blogs');
    return {
      props: { blogItems },
      revalidate: 1,
    };
}*/
