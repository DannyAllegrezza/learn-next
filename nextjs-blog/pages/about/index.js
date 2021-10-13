import Layout from "../../components/layout";

export async function getServerSideProps(context) {
    const result = await fetch("https://catfact.ninja/fact");
    const data = await result.json();

    return {
        props: {
            fact: data.fact
        }
    }
}

export default function About({ fact }) {
    return (
        <Layout>
            <h1>A random fact about cats...</h1>
            <p>This page demonstrates taking advantage of <b>server-side rendering</b> content using Next.js!</p>

            <code>{fact}</code>

            <p>The quote above was rendered <b>at request time</b> by the server, and then served in the returned HTML.</p>

            <img src="https://nextjs.org/static/images/learn/data-fetching/server-side-rendering-with-data.png" alt="Server-side Rendering" />

            <p>Although not as fast as <b>static rendering</b> at build time, using server-side rendering is great if you need to fetch data at request time instead of at build time.</p>

            <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">Read the docs</a> for more info.

        </Layout>
    )
}