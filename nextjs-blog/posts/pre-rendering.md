---
title: 'Two Forms of Pre-rendering'
date: '2021-10-12'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

# Static Generation with Data using getStaticProps
How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

`getStaticProps` runs at build time in production, and…
Inside the function, you can fetch external data and send it as props to the page.


```ts
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

Note: In development mode, getStaticProps runs on each request instead.

## Development vs. Production
* In development (npm run dev or yarn dev), getStaticProps runs on every request.
* In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths

Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.