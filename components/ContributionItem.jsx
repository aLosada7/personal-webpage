
import Link from 'next/link';

import LookingContributors from "./shared/LookingContributors";

const ContributionItem = ({ index, contribution }) => {
    let interactiveDemo = null;
    let sourceCode = null;

    if (contribution.live) {
        interactiveDemo = (<div><Link href={contribution.live}><a role="link" target="_blank" aria-label={contribution.live}>Interactive Demo</a></Link></div>)
    }

    if (contribution.repository) {
        sourceCode = (<div><Link href={contribution.repository}><a role="link" target="_blank" aria-label={contribution.repository}>Source Code</a></Link></div>)
    }

    return (
        <div className="row contribution-row">
            <div className={`col-8 ${(index % 2 === 0) ? ' col-offset-4 order-1' : 'order-2'} order-mobile-1 col-mobile-24 col-offset-mobile-0`}>
                <img src="https://frontendjoe.com/images/mi-screen.png" />
            </div>
            <div className={`col-8 ${(index % 2 === 0) ? 'order-2' : 'col-offset-4 order-1'} order-mobile-2 col-mobile-24 col-offset-mobile-0 contribution-text`}>
                {/*<LookingContributors />*/}
                <h3 className="mt-8 mb-8">{contribution.name}</h3>
                <p className="mt-8 mb-8 color-light-black">{contribution.smallDescription}</p>
                {interactiveDemo}
                {sourceCode}
            </div>
        </div>
    )
}

export default ContributionItem;