import Link from 'next/link';

export default function LookingContributors() {
    return (
        <div className="tags-container tags-green mt-8 place-up">
            <Link href="/contact"><a role="link" target="_blank" aria-label="looking-new-contributors">Looking for new contributors!</a></Link>
        </div>
    )
}