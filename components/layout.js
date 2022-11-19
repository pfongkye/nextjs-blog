import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from './pfk_profile.png';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Pascal';
export const siteTitle = 'Pascal Blog';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Blog about tech stuff" />
                <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image src={profilePic}
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name} 
                            width={200} height={200}/>
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">

                                <Image
                                    src={profilePic}
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name} width={200} height={200}/>

                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        ← Back to home
                    </Link>
                </div>
            )}
        </div>
    );
}