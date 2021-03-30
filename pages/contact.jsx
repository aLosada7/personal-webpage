import Layout from '../components/Layout';

export default function Contact() {
    return (
        <Layout>
            <section className="page-section first-section">
                <div className="container mb-l mb-mobile-l">
                    <div className="row">
                        <div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
                            <h2 className="page-title"><strong>Contact.</strong></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container contact">
                    <div className="row">
                        <div className="col-24">
                            <h3 className="text-center">Get in touch through my social media, or sending a message to my e-mail <i>(aldc30sc@gmail.com)</i></h3>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}