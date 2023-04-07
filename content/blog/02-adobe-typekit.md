---
title: Adding Adobe Fonts to GatsbyJS site
date: "2023-04-06"
description: "Adding Adobe Typekit to your GatsbyJs site. 3 steps!"
slug: fonts-gatsby
---

## Adding your Adobe Fonts to your Gatsby site

If you are anything like me, you may have google something like, "Adobe Fonts Gatsbyjs". Of course, you get a large search return but I found each solution to be unnecessarily long and complicated.

## 3 steps to Adding Adobe Fonts to Your Gatsby Site

### Step 1 -

Find your fonts and add them to your web project on [Adobe Fonts](https://fonts.adobe.com/). Then copy your `<link>` code. It should look something like this

```html
<link rel="stylesheet" href="https://use.typekit.net/[TYPEKITCODE].css" />
```

### Step 2

Take that code and save it in your SEO component. My SEO component looks like this

```jsx
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            linkedInURl
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <link
        rel="stylesheet"
        href="https://use.typekit.net/[TYPEKITCODE].css"
      ></link>
      {children}
    </>
  );
};

export default Seo;
```

## Step 3

At the bottom of your index.js page use the [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)

Mine looks like this

```jsx
export const Head = () => <Seo title="Home" />;
```

Now you can use your Adobe Typekit fonts exactly how you would use any fonts in your css. Copy the font-family code from your web project page on Adobe Fonts and add it to your styling page!

```css
p {
  font-family: proxima-nova, sans-serif;
  font-weight: 300;
  font-style: normal;
}
```
