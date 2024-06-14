# let-me-sleep

This is my Blog-Post, or what I like to call "Brain Dump".

## General Template

````mdx
---
title: <Title Here>
description: <Description Here>
date: <YYYY-MM-DD>
tags: ["tag1", "tag2", "tag3"]
published: <true/false>
---

<Content Here>
````

## Templates

### Add Title & Caption

````mdx
```js title="Title Here" caption="Caption Here"
// Code Here
```
````

### Show Line Numbers

````mdx
```js showLineNumbers
// Code Here
```

or 

```js showLineNumbers{numberToBeginWith}
// Code Here
```
````

### Highlight Lines

````mdx
```js {4}
// Code Here
```

or 

```js {4-7}
// Code Here
```

or 

```js {4,7-9}
// Code Here
```
````

### Highlight Lines By Id

````mdx
```js {1,2}#a {3,4}#b
// Code Here
```
````

### Highlight Words

````mdx
```js /wordToBeHighlighted/
// Code Here
```

or 

```js "wordToBeHighlighted"
// Code Here
```
````

### Highlight Specific Instances Of A Word

````mdx
```js /wordToBeHighlighted/2-4
// Code Here
```
````

### Highlight Words By Id

````mdx
```js /wordToBeHighlighted_1/#id1 /wordToBeHighlighted_2/#id2
// Code Here
```
````

### Inline Code Highlighting

````mdx
`[1,2,3].join(','){:js}`
````

### Highlight Plain Text

````mdx
`wordToBeHighlighted{:.<token>}`

e.g. This is a `highighted{:.entity.name.function}` plain text
````

## GitHub Flavored Markdown

### Headers

```mdx
# This is a h1 tag

## This is a h2 tag

#### This is a h4 tag
```

# This is a h1 tag

## This is a h2 tag

#### This is a h4 tag

### Emphasis

```mdx
_This text will be italic_

**This text will be bold**

_You **can** combine them_
```

_This text will be italic_

**This text will be bold**

_You **can** combine them_

### Lists

#### Unordered

```mdx
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

#### Ordered

```mdx
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

### Images

```mdx
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
Format: ![Alt Text](url)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

### Links

```mdx
http://github.com - automatic!
[GitHub](http://github.com)
```

http://github.com - automatic!
[GitHub](http://github.com)

### Blockquotes

```mdx
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

### Inline code

```mdx
I think you should use an
`<addr>` element here instead.
```

I think you should use an
`<addr>` element here instead.

### Syntax highlighting

Here’s an example of how you can use syntax highlighting with [GitHub Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/):

````mdx
```js:fancyAlert.js
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' })
  }
}
```
````

And here's how it looks - nicely colored with styled code titles!

```jsx
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: "#foo" });
  }
}
```

### Footnotes

```mdx
Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.
```

Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.

### Task Lists

```mdx
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```mdx
| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |
```

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

### Strikethrough

Any word wrapped with two tildes (like `~~this~~`) will appear ~~crossed out~~.
