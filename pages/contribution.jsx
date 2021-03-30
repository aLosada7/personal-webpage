import ContributionItem from '../components/ContributionItem';
import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';

export default function Contribution({ contributions }) {
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
                    {contributions.map((contribution, index) => (
                        <div className="row" key={contribution.lang}>
                            <div className="col-24">
                                <ContributionItem index={index} contribution={contribution}/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const contributions = await fetchFromCMS('contributions');
    console.log(contributions)
    return {
      props: { contributions },
      revalidate: 1,
    };
}