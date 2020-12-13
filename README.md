# Learn Next.js 📚

This repository contains my notes on the [Next.js](https://nextjs.org) framework!

## Demos

| Example        | Description                                    | Language | Demo                                                                   |
| -------------- | ---------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| `/nextjs-blog` | The official demo offered by the Next.js team. | JS       | [🔗 View Here](https://nextjs.org/learn/basics/create-nextjs-app/setup) |


## What is Next.js?
`Next.js` is a React framework that pulls together many of the features that normally need to be "bolted" onto a standard React application:
* Routing
* API Routes
* CSS Modules
* Code splitting and bundling
* Image optimization
* Internationalization
* Automatic polyfills
* [TypeScript support out of the box](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

## Who created Next.js?
`Next.js` was created by Vercel.

## Pages and routing
🔗 [Docs](https://nextjs.org/docs/basic-features/pages)

Similar to Gatsby, Next.js takes care of automatically creating routing for you based on directory/files placed inside of the `/pages` directory. 

In Next.js, a page is a React Component exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory. Each page is associated with a route based on its file name.

Example: If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

```js
function About() {
  return <div>About</div>
}

export default About
```

> NOTE: The component can have any name, but you must export it as a default export.

### Navigation (`next/link` component)
`Next.js` has a built in client-side routing paradigm, using the `<Link>` component. 

```js
  <Link href="/posts/first-post">
    <a>Hello world</a>
  </Link>
```