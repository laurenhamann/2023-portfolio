--- 
title: Organize your Code part one
slug: organize-code-part-one
author: Lauren Hamann
published: true
date: 2021-10-02
tags: [Gatsby, Emotion, Javascript, CSS, Organization]
---

### Organizing your styles  
#### Keeping your files organized for future use 
- [Organizing your styles](/organize-your-code-part-one)
- [Organizing your components](/organize-your-code-part-two)
- Know when to refractor 
I have created over 100 different websites. Most of them for practice and some just for fun. One problem I always ran into was keeping track of the CSS. I would try and organize it by page or by size (mobile - desktop). Still every time I would struggle after a while to figure out where the styles are for a certain element. Eventually, I would just add another instance of this element and move on. That only made it more disorganized and not to mention if I were to take a break from the project and come back I would just scrap it because I could never understand what was going on.  
Being organized is a big part of coding. Imagine if another person were to open up your project, would they know after a couple of minutes what your code is doing? Would they be able to pick up your project and get to work finishing it?  

### I'm sure that there are many ways to organize your files for styling. Here is mine:  


For this project, I am using Gatsby and Emotion for CSS. Destructuring was the best way I could think of to organize my CSS. 
I started with a folder Global. This holds all the reusable styles for my project. Inside my global folder, I created files colors.js, fonts.js, spacing.js.  

for example my colors.js file  

```js
const mainBold = '#e68590';
const mainComp = '#A86870';
const lightNeutral = '#f3e2e4';
const darkNeutral = '#092421';
const accent = '#913943';


export const colors = { mainBold,
                        mainComp,
                        lightNeutral,
                        darkNeutral,
                        accent }
```

Just a simple js file to hold my CSS variables. Once you have your colors.js then you can import them into other files. Next, I went to my fonts.js. This file holds all of my font-face URLs.  

Fonts.js  
```js  
const elsie400 = `@font-face {
    font-family: 'Elsie';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
        local('Elsie Regular '),
        local('Elsie-Regular'),
      url('./files/elsie-latin-400.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/elsie-latin-400.woff') format('woff'); /* Modern Browsers */
    }`
;
  /* elsie-900normal - latin */
const elsie900 = `@font-face {
    font-family: 'Elsie';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src:
        local('Elsie Black '),
        local('Elsie-Black'),
        url('./files/elsie-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
        url('./files/elsie-latin-900.woff') format('woff'); /* Modern Browsers */
    }`
;

/* elsie-swash-caps-400normal - latin */
const elsieSwash400 = `@font-face {
        font-family: 'Elsie Swash Caps';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:
            local('Elsie Swash Caps Regular '),
            local('Elsie Swash Caps-Regular'),
            url('./files/elsie-swash-caps-latin-400.woff2') format('woff2'), /* Super Modern Browsers */
            url('./files/elsie-swash-caps-latin-400.woff') format('woff'); /* Modern Browsers */
    }`
;

/* open-sans-condensed-300italic - latin */
const openSansCondenseditalic300 = `@font-face {
    font-family: 'Open Sans Condensed';
    font-style: italic;
    font-display: swap;
    font-weight: 300;
    src:
        local('Open Sans Condensed Light italic'),
        local('Open Sans Condensed-Lightitalic'),
        url('./files/open-sans-condensed-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('./files/open-sans-condensed-latin-300italic.woff') format('woff'); /* Modern Browsers */
    }`
;
/* open-sans-condensed-700normal - latin */
const openSansCondensed700 = `@font-face {
    font-family: 'Open Sans Condensed';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src:
        local('Open Sans Condensed Bold '),
        local('Open Sans Condensed-Bold'),
        url('./files/open-sans-condensed-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('./files/open-sans-condensed-latin-700.woff') format('woff'); /* Modern Browsers */
    }`
;

export const fonts = {  openSansCondensed700,
                        elsie400,
                        elsie900,
                        elsieSwash400 };
```
Then I imported my fonts.js to layout.js. My layout.js component holds all my global styles and wraps my entire app. 
all I did here is ` import { fonts } from './global/fonts'`  
This is useful for adding font-families to other components that are children of my layout component. Instead of adding all the font styles inside of fonts.js, I created another file called font-styles.js. This holds all my standard styles. Before I show you my font-styles.js file, I need to explain that I reconfigured my files at this point. I decided to take out all my sizes and put them inside their file. I called this one font-sizes.js. 
Font-sizes.js  
```js  
const  h1 = {
    min: "28px",
    pef: "4.4vw",
    max: "66px"
}

const h2 = {
    min: "24px",
    pef: "3.2vw",
    max: "52px"
}

const h3 = {
    min: "16px",
    pef: "2.39vw",
    max: "40px"
}

const h4 = {
    min: "14px",
    pef: "1.8vw",
    max: "36px"
}

const p = {
    min: "10px",
    pef: "1.5vw",
    max: "22px"
}

const nav = {
    min: "16px",
    pef: "1.8vw",
    max: "24px"
}

const anchor = {
    min: "14px",
    pef: "1.8vw",
    max: "24px"
}

const intro = {
    min: "18px",
    pef: "2.1vw",
    max: "36px"
}

const logo = {
    min: "32px",
    pef: "5.3vw",
    max: "76px"
}

const span = { 
    min: "8px",
    pef: "1.2vw",
    max: "18px"
}
export const fontSize = { h1, h2, h3, h4, p, anchor, logo, intro, nav, span }  
```

If this looks strange it is because I wanted to try and not use any media queries in this project. I find media queries to be extremely annoying to write. I hate how it suddenly changes at a certain width and now with all the different screen sizes, it is impossible to make it look great on every screen. I chose to use the CSS clamp() for all of my font-sizes, widths, margins, and such. It has made my site way more responsive with a lot less coding.  
Maybe I will write a blog post on css clamp() eventually. For now, here is a small explanation.  
```js
const  h1 = {
    min: "28px",
    pef: "4.4vw",
    max: "66px"
}
```
With clamp(), it takes three values. The first value is the absolute smallest size you would want. For font-size, the smallest size you want your element to be. Normally your mobile size font. This value should be a fixed measurement, don't use a responsive value here. If you use a responsive value it will never be able to hit the value and then stop getting smaller. The second value is your preferred value. This is what you want your element to be most of the time. To get these values, I had to do some math. Luckily, I already had a mockup so I could see what looked good on the screen size. I started with 768px for my next step. `768 * 0.044 = 33.792`. My preferred value for my H1 element is 33.79px on a screen that is 768px. Next I did `1024 * 0.044 = 45.056`. I tried it out and it still looked good. I kept going until my font-size was growing too large then used the last time my element still looked good for the screen size and that became my max value. Max value is the absolute largest value you would want your element. Once it reaches max value it will stop being responsive and stay at that value, h1 being 66px. Max value must be a fixed measurement also. It took some time to get the responsive viewport width value of each element but I am glad I took the time to get the values correct because now I don't have to use *ANY* media queries.  

Next, I created a file called clamps.js. This became my hub for all my value objects so I could create the final variables holding my clamp() function. 

clamps.js 
```js
import { space } from '../layout/spacing'
import { width } from '../layout/div-width'
import { fontSize } from '../fonts/font-size'
//margins
const marginTop = `
    clamp(${space.marginTB.min}, ${space.marginTB.pef}, ${space.marginTB.max})
`

const marginBottom = `
    clamp(${space.marginTB.min}, ${space.marginTB.pef}, ${space.marginTB.max})
`

const marginLeft = `
    clamp(${space.marginRL.min}, ${space.marginRL.pef}, ${space.marginRL.max})
`

const marginRight = `
    clamp(${space.marginRL.min}, ${space.marginRL.pef}, ${space.marginRL.max})
`
const xsMargin = `
    clamp(${space.xsMargin.min}, ${space.xsMargin.pef}, ${space.xsMargin.max})
`
const medMargin =`
    clamp(${space.medMargin.min}, ${space.medMargin.pef}, ${space.medMargin.max})
`

//widths
const gridWidth =`
    clamp(${width.gridTwoToThree.min}, ${width.gridTwoToThree.pef}, ${width.gridTwoToThree.max})
`
const blogColumnWidth =`
    clamp(${width.previewDisplay.min}, ${width.previewDisplay.pef}, ${width.previewDisplay.max})
`
const heroBannerWidth =`
    clamp(${width.bannerImageWidth.min}, ${width.bannerImageWidth.pef}, ${width.bannerImageWidth.max})
`
const heroBannerHeight =`
    clamp(${width.bannerImageHeight.min}, ${width.bannerImageHeight.pef}, ${width.bannerImageHeight.max})
`
const headerWidth =`
    clamp(${width.headerWidth.min}, ${width.headerWidth.pef}, ${width.headerWidth.max})
`
const aboutTitleWidth =`
    clamp(${width.aboutTitleWidth.min}, ${width.aboutTitleWidth.pef}, ${width.aboutTitleWidth.max})
`
const articleWidth =`
    clamp(${width.article.min}, ${width.article.pef}, ${width.article.max})
`
const articleDivWidth =`
    clamp(${width.blogPreviewArticleWidth.min}, ${width.blogPreviewArticleWidth.pef}, ${width.blogPreviewArticleWidth.max})
`
const blogImageDivWidth =`
    clamp(${width.blogImageDivWidth.min}, ${width.blogImageDivWidth.pef}, ${width.blogImageDivWidth.max})
`
const blogPreviewWidth =`
    clamp(${width.blogPreviewDivWidth.min}, ${width.blogPreviewDivWidth.pef}, ${width.blogPreviewDivWidth.max})
`

const gridSectionWidth =`
    clamp(${width.gridSection.min}, ${width.gridSection.pef}, ${width.gridSection.max})
`
const gridInnerDivWidth =`
    clamp(${width.gridDiv.min}, ${width.gridDiv.pef}, ${width.gridDiv.max})
`
const fullSizeImage =`
    clamp(${width.fullSizeImage.min}, ${width.fullSizeImage.pef}, ${width.fullSizeImage.max})
`
const inputWidth =`
    clamp(${width.inputWidth.min}, ${width.inputWidth.pef}, ${width.inputWidth.max})
`
const primBtn =`
    clamp(${width.primBtn.min}, ${width.primBtn.pef}, ${width.primBtn.max})
`
const secondaryBtn =`
    clamp(${width.secondaryBtn.min}, ${width.secondaryBtn.pef}, ${width.secondaryBtn.max})
`
const filterDivWidth =`
    clamp(${width.filterDivWidth.min}, ${width.filterDivWidth.pef}, ${width.filterDivWidth.max})
`

//font-size
const h1Size =`
    clamp(${fontSize.h1.min},${fontSize.h1.pef}, ${fontSize.h1.max})
`

const h2Size =`
    clamp(${fontSize.h2.min},${fontSize.h2.pef}, ${fontSize.h2.max})
`

const h3Size =`
    clamp(${fontSize.h3.min},${fontSize.h3.pef}, ${fontSize.h3.max})
`

const h4Size =`
    clamp(${fontSize.h4.min},${fontSize.h4.pef}, ${fontSize.h4.max})
`

const pSize = `
    clamp(${fontSize.p.min},${fontSize.p.pef}, ${fontSize.p.max})
`

const anchorSize = `
    clamp(${fontSize.anchor.min},${fontSize.anchor.pef}, ${fontSize.anchor.max})
`

const navSize =`
    clamp(${fontSize.nav.min},${fontSize.nav.pef}, ${fontSize.nav.max})
`

const logoSize =`
    clamp(${fontSize.logo.min},${fontSize.logo.pef}, ${fontSize.logo.max})
`

const spanSize =`
    clamp(${fontSize.span.min},${fontSize.span.pef}, ${fontSize.span.max})
`

const introSize =`
    clamp(${fontSize.intro.min},${fontSize.intro.pef}, ${fontSize.intro.max})
`

const largeLinkSize =`
clamp(${fontSize.largeLink.min},${fontSize.largeLink.pef}, ${fontSize.largeLink.max})
`

const catTags=`
    clamp(${fontSize.spanSmall.min}, ${fontSize.spanSmall.pef}, ${fontSize.spanSmall.max})
`


export const clamps = { marginBottom, marginTop, marginLeft, marginRight, xsMargin, medMargin, gridWidth, blogColumnWidth, heroBannerWidth, heroBannerHeight, blogImageDivWidth, blogPreviewWidth, articleDivWidth, gridSectionWidth, gridInnerDivWidth, headerWidth, aboutTitleWidth, articleWidth, fullSizeImage, inputWidth, primBtn, secondaryBtn, filterDivWidth, largeLinkSize, introSize, spanSize, logoSize, navSize, anchorSize, pSize, h1Size, h2Size, h3Size, h4Size, catTags };
```
I know it is large but I wanted to show what it looks like at this moment.
As you can see because the variable is an object all I have to put to call the object is `fontSize.spanSize.min` to grab that value. 
font-styles.js

```js
import { colors } from '../color/colors';
import { clamps } from '../responsive/clamps';
const h1Style = `
    font-family: "Open Sans Condensed";
    font-weight: 600;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h1Size};
    text-align: center;
    margin-bottom: ${clamps.marginBottom};
    
`
const h2Style = `
    font-family: "Elsie Swash Caps";
    font-weight: 400;
    color: ${colors.accent};
    font-size: ${clamps.h2Size};
    text-align: center;
`
const h3Style = `
    font-family: "Open Sans Condensed";
    font-weight: 300;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h3Size};
    text-align: center;
`
const h4Style = `
    font-family: "Open Sans";
    font-weight: 700;
    font-style: italic;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h4Size};
    text-align: center;
`

const pStyle = `
    font-family: "Open Sans";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.pSize};
`

const anchorStyle = `
    font-family: "Elsie";
    font-weight: 400;
    color: ${colors.mainBold};
    text-decoration: none;
    font-size: ${clamps.anchorSize};
    &:hover {
        font-style: italic;
    }
    &.page-links {
        text-decoration: underline;
        font-size: ${clamps.spanSize};
    }
`
const navStyle = `
    font-family: "Open Sans";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.navSize};
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
        font-weight: 700;
        color: ${colors.accent}
    }
`

const logoStyle = `
    font-family: "Elsie Swash Caps";
    font-weight: 900;
    color: ${colors.mainBold};
    text-decoration: none;
    font-size: ${clamps.logoSize};
`
const aboutSpan =`
    font-family: "Elsie Swash Caps";
    font-weight: 400;
    color: ${colors.accent};
    font-size: calc(${clamps.h1Size} * 2);
`

const spanStyle = `
    font-family: "Open Sans";
    font-weight: 300;
    font-style: italic;
    color: ${colors.darkNeutral};
    font-size: ${clamps.spanSize};
`

const introStyle = `
    font-family: "Open Sans Condensed";
    font-weight: 700;
    color: ${colors.mainComp};
    font-size: ${clamps.introSize};
`

const largeLink =`
    font-family: "Open Sans";
    font-weight: 300;
    color: ${colors.accent};
    text-align: center;
    margin-top: ${clamps.marginTop};
    margin-bottom: ${clamps.xsMargin};
    font-size: ${clamps.largeLinkSize};
    &:hover {
        font-style: italic;
        text-decoration: underline;
    }
`

const label = `
    font-family: "Elsie";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.pSize};
    transition: color 1s;
    &:focus-within {
        font-weight: 900;
        color: ${colors.accent};
    }
`

const input =`
    font-family: "Open Sans";
    font-weight: 300;
    color: ${colors.darkNeutral};
    font-size: calc(${clamps.pSize} * 0.8);
    border: none;
    background: #fffeff;
    border: solid 2px transparent;
    outline: none;
    box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.2);
    transition: all 1s;
    &:focus {
        outline: ${colors.mainBold};
        border: solid 3px ${colors.mainBold};
        background: #fffdff;
        box-shadow: inset -1px 2px 4px rgba(50, 50, 50, 0.2);
    }
    &:-internal-autofill-selected {
        background: #fffdff !important;
    }
`

const categoryTag =`
    font-family: "Elsie Swash Caps";
    font-weight: 300;
    color: ${colors.mainBold};
    font-size: ${clamps.catTags};
    &:hover,
    &:focus {
        animation: pastelRainbow 2s infinite;
    }
`
const typographyStyles = `
    h1 {
        ${h1Style}
    }

    h2 {
        ${h2Style}
    }

    h3 {
        ${h3Style}
    }

    h4 {
        ${h4Style}
    }

    p {
        ${pStyle}
    }

    .page-links {
        ${anchorStyle}
    }
    ul {
        padding-inline-start: 0px;
        li {
            ${pStyle}
        }
    }
    nav ul li a {
        ${navStyle}
    }

    .logo {
        ${logoStyle}
    }

    .intro {
        ${introStyle}
    }

    .small,
    .author-span {
        ${spanStyle}
    }
    .large-link,
    .load-link {
        ${largeLink}
    }
    .about-font-span {
        ${aboutSpan}
    }

    label {
        ${label}
    }
    input,
    textarea {
        ${input}
    }

    .tags {
        ${categoryTag}
        margin-right: ${clamps.xsMargin};
    }
`
export default typographyStyles;
```
I decided to create all the variables on top then create a general variable with my elements and export just the one variable as default. Since these styles do not have to reusable in multiple files, it makes them cleaner and easier to read. All of my typography styles are in these files, even for classes and ids. This file gets imported into my layout.js file and added under the global tag 
`${typographyStyles}`


My global folder tree -->  
global -->
        colors --> colors.js
               --> gradients.js
        effects --> animation.js
        elements --> element-styles.js
        fonts --> font-size.js
              --> font-styles.js
              --> fonts.js
        layout --> div-width.js
                --> flex-box.js
                -->global-style.js
                --> margin.js
                --> spacing.js
        responsive --> clamps.js
        global.js


After a couple of weeks of multiple imports from various folders inside of global I combined them inside a new file called global.js  
global.js holds all the imports from all the style files and then exports them. I can still get my styles like before but now they are inside one import statement. 

global.js 
```js
import { animation } from './effects/animation'
import { flex } from './layout/flex-box'
import typographyStyles from './fonts/font-styles'
import { gradients } from './color/gradients'
import { clamps } from './responsive/clamps'
import { margin } from './layout/margin'
import { colors } from './color/colors'
import globalStyles from './layout/global-style'
import { fonts } from './fonts/fonts'
import elements from './elements/element-styles'
export { animation, flex, typographyStyles, gradients, clamps, margin, colors, globalStyles, fonts, elements };
```
Now inside of my components, I just import what I need, and adding variables as needed is very simple. 
it looks like this
`import { flex, clamps, gradients } from '../../global/global`
It makes my react components look much cleaner and I am still able to grab everything I need in one place. 


###Common css styles  
To help myself from repeating code, some of my files just hold standard styles I use a lot. This is true inside of flex.js and margin.js. 

flex-box.js 
```js 
const flexRow = `
    display: flex;
    flex-direction: row;
`

const flexCol = `
    display: flex;
    flex-direction: column;
`

const justifySB = `
    justify-content: space-between;
`

const justifySA = `
    justify-content: space-around;
`

const justifyCenter = `
    justify-content: center;
`

const alignItemsCenter = `
    align-items: center;
`

const alignItemsTop = `
    align-content: flex-start;
`

const alignItemsBottom = `
    align-content: flex-end;
`


export const flex = {alignItemsBottom, alignItemsCenter, alignItemsTop, justifyCenter, justifySA, justifySB, flexCol, flexRow};
```

Now inside of my styled-components, I just have to import flex from global and put `${flex.flexCol}` I do not need a semi-colon because inside the variable it is completed code. 

` import { flex, colors, animation } from '../../global/global'`
For me, organizing your styles is a must! If you constantly find yourself wondering why an element isn't doing what you want it to, most likely a previous style is overriding it. Read on to [part two, to learn how I organize my component files.](/organize-your-code-part-two) 