import Link from 'next/link';
export default function Newspage() {
  return (
    <>
    <h1>The newspage</h1>
    <ul>
      <li>
        <Link href="/news/this-is-great">

        This is a great page
        </Link>
      </li>
      <li>
        <Link href="/news/cool-news">This is a cool news</Link>
      </li>
    </ul>
    </>
  )
}
