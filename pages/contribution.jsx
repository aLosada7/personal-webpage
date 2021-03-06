import ContributionItem from '../components/ContributionItem';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import contributions from '../contributions.json';

export default function Contribution() {

    const [technologySelected, setTechnologySelected] = useState("All");
    const [techsList, setTechList] = useState([]);
    const [contributionsFiltered, setContributionsFiltered] = useState([]);

    const getTechsSortedWithoutDuplicates = () => {
        let techs = contributions.reduce((result, contribution) => { 
            const contributionTechs = contribution.techs.map((tech) => {
                if(tech && !result.includes(tech)) {
                    return tech;
                }
            })
            const newTechs = result.concat(contributionTechs)
            return newTechs.filter(element => element != null)
        }, ["All"])
        return techs.sort()
    }

    useEffect(() => {
        setTechList(getTechsSortedWithoutDuplicates())
        setContributionsFiltered(contributions)
    }, [contributions])

    useEffect(() => {
        const contributionsList = (technologySelected === "All" ? contributions : contributions.filter(contribution => contribution.techs.includes(technologySelected)))
        setContributionsFiltered(contributionsList)
    }, [technologySelected])
    
    return (
        <Layout>
            <section className="page-section first-section">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-16 col-mobile-24">
                            <h2 className="page-title"><strong>Contribution.</strong></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="content-wrapper contribution-filters">
                    <div className="row">
                            <div className="col-16 col-offset-4 col-mobile-24 col-offset-mobile-0 overflow-x-mobile">
                            {techsList.map(tech => (
                                <button 
                                    key={tech} 
                                    className={`button white-button no-wrap ${(tech === technologySelected) ? 'active-white-button' : ''}`} 
                                    onClick={() => setTechnologySelected(tech)}>{tech}</button>
                            ))}
                            </div>
                        </div>
                </div>
            </section>
            <section className="page-section">
                <div className="content-wrapper contribution">
                    {contributionsFiltered.map((contribution, index) => (
                        <div className="row mb-l mb-mobile-l" key={contribution.lang}>
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

/*export async function getStaticProps() {
    const contributions = await fetchAPI('contributions');
    return {
      props: { contributions },
      revalidate: 1,
    };
}*/