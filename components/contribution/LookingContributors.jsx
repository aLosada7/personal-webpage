import Link from 'next/link';

export default function LookingContributors() {
    return (
        <div className="tags-container mt-8 mt-mobile-0 place-up">
            <Link href="/contact"><a role="link" aria-label="looking-new-contributors" className="button green-button">Looking for new contributors!</a></Link>
        </div>
    )
}