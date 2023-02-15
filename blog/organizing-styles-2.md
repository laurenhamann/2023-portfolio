--- 
title: Organize your Code part two
slug: organize-code-part-two
author: Lauren Hamann
published: true
date: 2021-10-30
tags: [Gatsby, Emotion, Javascript, CSS, React, Organization]
---

### Keeping your files organized for future use 
- [Organizing your styles](/organize-your-code-part-one)
- [Organizing your components](/organize-your-code-part-two)
- Know when to refractor 
### Organizing your component files
Once again, I found myself constantly searching for the file I needed or making another React component that is extremely similar to one that I already created. 
For the styled-components, I am using `@emotion/styled` gatsby plugin. 
Previously, I would use the CSS variable that comes with the `@emotion/react` plugin. It is a great option for quick CSS for a specific element. But it is like adding all your CSS into your HTML. It gets confusing quickly, especially if you have external stylesheets. Next thing you know, you are overriding your styles from your stylesheet with the HTML style attribute and you sit there scratching your head, in dev tools trying to figure out why your styles aren't working.  
Here is my work-around for the problem I kept running into. 

For all my components they are inside a properly named folder. For example, my **header** folder holds a styles folder and my hero component, header component, and a nav folder. The styles folder holds my styled-components. Inside my nav folder, I have another styles folder, my hamburger-button component, nav-ul component, and the nav component which is the wrapper of the previous two components. I did this so if I eventually added a footer nav, I could reuse the nav-ul component, or if I needed another pop-up menu I could reuse the hamburger-button easily. 


Inside my nav>styles folder, I have hamburger-btn-style.js, nav-style.js, nav-ul-style.js

This may seem like overkill, but this just helps with reusability. My styles are directly attached to each component and in the future when I need to reuse the nav-ul I will have consistent styling. 

nav-ul-style.js

```jsx
import styled from '@emotion/styled'
import { flex, clamps } from '../../../global/global'

const NavUlStyle = styled('ul')`
        ${props => props.width > 768 ? `
            ${flex.flexRow}
            ${flex.justifySB}
            ${flex.alignItemsCenter}
            margin-bottom: ${clamps.marginBottom};
            li {
                margin-right: ${clamps.xsMargin};
            }
        ` : `
            margin-right: ${clamps.xsMargin};
        `}
`

export default NavUlStyle
```  

nav-ul.js  
```jsx
import React from 'react'
import { Link } from 'gatsby'
import NavUlStyle from './styles/nav-ul-style'



const NavUl = (props) => (
    <NavUlStyle className={props.visible ? "visible" : "hidden"}>
        <li className="nav-item">
            <Link to="/" activeClassName="active">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/projects" activeClassName="active">
                Projects
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/blogs" activeClassName="active">
                Blogs
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/about" activeClassName="active">
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" activeClassName="active">
                Contact
            </Link>
        </li>
    </NavUlStyle>
)

export default NavUl;
```
nav.js  
```jsx
import React from 'react'
import HamburgerBtn from './hamburger-btn'
import NavUl from './nav-ul'
import NavStyle from './styles/nav-style'


const Nav = (props) => (
    <NavStyle width={props.width}>
        {
            props.width > 768 
                ? 
            <NavUl 
                visible ={true}
            /> 
                : 
            <>
                <NavUl 
                    visible={props.opened}
                    width={props.width} 
                /> 
                <HamburgerBtn 
                    change={props.opened}
                    click={props.click}
                />
            </>
        }
    </NavStyle>

);

export default Nav;
```

In my opinion, taking some extra time to plan and organize your components makes your code more reusable in the future. Another way to organize your code further is knowing when to refractor. Explained in part three.