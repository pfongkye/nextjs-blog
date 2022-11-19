import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { learnings } from "../garden/resources.json";

import styles from '../styles/garden.module.css';

export default function Garden() {
    return <div>
        <Head>
            <title>Digital Garden</title>
        </Head>
        <div className={styles.root}>
            <div className={styles.imageWrapper}>
        {/** image is only decorative so alt prop is empty string */}
        <Image layout="fill" src="/images/dall_e_digital_garden.png" alt=""/>
        </div>
        <ul className={styles.learnings}>
            {learnings.map(({ title, link }, i) => (
                <li key={`learning${i}`}>
                    <Link href={link}>
                        <a target='_blank' rel='noreferrer'>{title}</a>
                    </Link>
                </li>))}
        </ul>
        </div>
    </div>
}