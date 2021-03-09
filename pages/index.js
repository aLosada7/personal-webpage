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
                personal presentation
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
                                            src={blog.image[0].name}
                                            width={250}
                                            height={400}
                                            alt={blog.Headline}
                                        />
                                        <h1>{blog.Headline}</h1>
                                        <h2>{blog.date}</h2>
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