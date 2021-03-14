import ContributionItem from '../components/ContributionItem';
import Layout from '../components/Layout';

export default function Contribution() {
    return (
        <Layout>
            <section className="page-section first-section">
                <div className="container mb-l mb-mobile-l">
                    <div className="row">
                        <div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
                            <h2 className="page-title"><strong>Contribution.</strong></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container contribution">
                    <div className="row">
                        <div className="col-24">
                            <ContributionItem index="0"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-24">
                            <ContributionItem index="1"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}