import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';

export default function Blog({ blogItems }) {
    return (
        <Layout>
            <section className="page-section first-section">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
                            <h2 className="page-title"><strong>Blog.</strong></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="content-wrapper">
                    <div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
                        <p className="text-center"><strong>I am working on it and hope it will be available soon. <br />Come later for more updates :)</strong></p>
                    </div>
                    {/*<div className="row blog-summary-entry-list">
                        {blogItems.map((blog) => (
                            <div className="col-8 col-mobile-24" key={blog.slug}>
                                <div className="blog-summary-entry mb-3">
                                    <Link as={`/blog/${blog.slug}`} href="/blog/[id]">
                                        <div className="main-image">
                                            <Image
                                                layout="responsive"
                                                src={blog.image[0].name}
                                                width={300}
                                                height={248}
                                                alt={blog.Headline}
                                            />
                                            <Link as={`/blog/${blog.slug}`} href="/blog/[id]"><time className="blog-date">{blog.date}</time></Link>
                                            <Link as={`/blog/${blog.slug}`} href="/blog/[id]"><strong className="blog-title">{blog.Headline}</strong></Link>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                </div>
            </section>
        </Layout>
    )
}

/*export async function getStaticProps() {
    const blogItems = await fetchFromCMS('blogs');
    return {
      props: { blogItems },
      revalidate: 1,
    };
}*/