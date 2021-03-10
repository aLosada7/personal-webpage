import Image from 'next/image';
import Link from 'next/link';

import fetchFromCMS from '../lib/service';
import Layout from '../components/Layout';

export default function Blog({ blogItems }) {
    return (
        <Layout>
            <section className="page-section first-section entries">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="page-title"><strong>Blog.</strong></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="content-wrapper">
                    <div className="row justify-content-start">
                        <div className="blog-summary-entry-list">
                            {blogItems.map((blog) => (
                                <div className="col-lg-6 col-xl-4" key={blog.slug}>
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
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const blogItems = await fetchFromCMS('blogs');
    return {
      props: { blogItems },
      revalidate: 1,
    };
}