import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello i am Raj Thapa. I am from Nepal, Kathmandu.
          <br /> I am a web developer and i have excellent knowledge in HTML,
          CSS, JS, React and wordpress{" "}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className="utilStyle.listItem">
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
              </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date}></Date>
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
