import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({ allPostsData, quote }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.menu}>
      <button onClick={()=>setIsMenuOpen(prevState=>!prevState)}>Menu</button>
      <ul className={classNames(utilStyles.menuList, {[utilStyles.menuListOpen]: isMenuOpen})}>
        <li><Link href='/playground'><a>Playground</a></Link></li>
        <li><Link href='/garden'><a>Digital Garden</a></Link></li>
      </ul>
      </div>
      <section className={utilStyles.headingMd}>
        {quote? <><p className={utilStyles.quote}>"{quote.content}"</p><p className={utilStyles.quoteAuthor}>- {quote.author}</p></> : <p>Welcome to my blog.</p>}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const res = await fetch('https://api.quotable.io/random');
  const quote = await res.json();
  return {
    props: { allPostsData, quote },
        // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  };
}
