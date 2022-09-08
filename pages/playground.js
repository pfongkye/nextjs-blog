import Head from "next/head";
import Layout from "../components/layout";

export default function Playground(){
    return (
        <Layout>
            <Head>
                <title>Playground</title>
            </Head>
            <div>My sandbox.</div>
        </Layout>
    )
}