import Link from 'next/link';

export default function LookingContributors() {
    return (
        <div className="tags-container tags-black mt-8">
            <Link href="/contact"><a role="link" target="_blank" aria-label="looking-new-contributors">Looking for new contributors!</a></Link>
        </div>
    )
}