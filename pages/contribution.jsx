import ContributionItem from '../components/ContributionItem';
import Layout from '../components/Layout';

export default function Contribution() {
    return (
        <Layout>
            <section className="page-section first-section">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="page-title"><strong>Contribution.</strong></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <ContributionItem index="0"/>
                            <ContributionItem index="1"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}