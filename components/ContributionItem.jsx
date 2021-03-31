
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import LookingContributors from "./shared/LookingContributors";
import { getStrapiMedia } from '../lib/media';

const ContributionItem = ({ index, contribution }) => {
    let imageSrc = null;
    let interactiveDemo = null;
    let sourceCode = null;
    let sourceCodeAPI = null;

    if (contribution.image.length > 0) {
        imageSrc = getStrapiMedia(contribution.image[0])
    }

    if (contribution.live) {
        interactiveDemo = (<div><Link href={contribution.live}><a role="link" target="_blank" aria-label={contribution.live}>Interactive Demo</a></Link></div>)
    }

    if (contribution.repository) {
        sourceCode = (<div><Link href={contribution.repository}><a role="link" target="_blank" aria-label={contribution.repository}>Source Code</a></Link></div>)
    }

    if (contribution.repositoryAPI) {
        sourceCodeAPI = (<div><Link href={contribution.repositoryAPI}><a role="link" target="_blank" aria-label={contribution.repositoryAPI}>Source Code (API)</a></Link></div>)
    }

    return (
        <div className="row contribution-row">
            <div className={`col-8 ${(index % 2 === 0) ? ' col-offset-4 order-1' : 'order-2'} order-mobile-1 col-mobile-24 col-offset-mobile-0`}>
                <img src={imageSrc} alt={contribution.name}/>
            </div>
            <div className={`col-8 ${(index % 2 === 0) ? 'order-2' : 'col-offset-4 order-1'} order-mobile-2 col-mobile-24 col-offset-mobile-0 contribution-text`}>
                <h3 className="mt-8 mb-8">{contribution.name}</h3>
                <p className="mt-8 mb-8 color-light-black"><Markdown>{contribution.smallDescription}</Markdown></p>
                {interactiveDemo}
                {sourceCode}
                {sourceCodeAPI}
                {contribution.lookingContributors ? <LookingContributors /> : null}
            </div>
        </div>
    )
}

export default ContributionItem;