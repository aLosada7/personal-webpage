import Image from 'next/image';
import Link from 'next/link';
import HomeHeader from '../components/HomeHeader';

import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';

export default function Home({ blogItems }) {
    return (
        <Layout>
            <HomeHeader></HomeHeader>
            <section className="page-section">
                <div className="container about mt-l mt-mobile-l mb-l mb-mobile-l">
                    <div className="row">
                        <div className="col-8 col-offset-4 col-mobile-24 col-offset-mobile-0">
                            <div className="about-left">
                                <h2 className="page-title mb-16">Hey, I'm Alvaro.</h2>
                                <div className="text mt-16 mb-16">
                                    <p className="color-light-black line-140">I’m a software engineer living and working in Asturias. I work daily on building better and elegant software using design principles, agile frameworks, and programming disciplines.</p>
                                </div>
                                <div className="button-wrrapper mt-16 mb-16">
                                    <button className="button">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-mobile-24 col-offset-mobile-0">
                            <div className="about-img-wrapper">
                                <img
                                    src="/alvaro.jpeg"
                                    alt="Alvaro profile picture" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section entries">
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
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const blogItems = await fetchFromCMS('blogs');
    return {
      props: { blogItems },
      revalidate: 1,
    };
}