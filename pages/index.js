import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';

export default function Home({ blogItems }) {
    return (
        <Layout>
            <Header></Header>
            <section className="page-section">
                <div className="content-wrapper about">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 offset-md-2">
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="about-left">
                                        <div className="page-title">Hey, I'm Alvaro</div>
                                        <div className="text">I’m a software engineer living and working in Asturias. I work daily on building better and elegant software using design principles, agile frameworks, and programming disciplines.</div>
                                        <div className="button-wrrapper">
                                            <button className="button">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="about-img-wrapper">
                                        <img
                                            src="/alvaro.jpeg"
                                            alt="Alvaro profile picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section entries">
                <div className="content-wrapper">
                    <div className="row justify-content-start ">
                    {blogItems.map((blog) => (
                        <div className="col-md-6" key={blog.slug}>
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