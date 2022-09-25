import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

import { learnings } from "../garden/resources.json";

export default function Garden() {
    return <Layout>
        <Head>
            <title>Digital Garden</title>
        </Head>
        <ul>
            {learnings.map(({ title, link }, i) => (
                <li key={`learning${i}`}>
                    <Link href={link}>
                        <a target='_blank' rel='noreferrer'>{title}</a>
                    </Link>
                </li>))}
        </ul>
    </Layout>
}