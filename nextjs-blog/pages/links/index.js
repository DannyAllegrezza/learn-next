import Link from 'next/link';

export default function Links() {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/">Home without a tag</Link>
        </div>
    )
}