import Image from 'next/image';

import Layout from '../../components/Layout';

const BlogItem = ({ blog = {} }) => {
    return (
        <Layout>
            <div className="row">
                <div className="blog-image text-center mb-4">
                <div className="col-md-12">
                    <Image
                    src={blog.image[0].name}
                    width={1000}
                    height={500}
                    />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="blog-content">
                <div className="col-md-12">
                    <div className="blog-headline text-center m-2">
                    <h1>{blog.Headline}</h1>
                    <h2>{blog.date}</h2>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }}/>
                </div>
                </div>
            </div>
        </Layout>
      );
  };

/*export async function getStaticPaths() {
    const blogs = await fetchFromCMS('blogs');

    return {
        paths: blogs.map((blog) => ({
            params: {
                slug: blog.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blog = await fetchFromCMS(`blogs?slug=${params.slug}`);

    return {
        props: { blog: blog[0] },
        revalidate: 1,
    };
}*/

export default BlogItem;