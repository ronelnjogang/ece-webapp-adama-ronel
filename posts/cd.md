---
id: 'cd'
no: '01'
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis pharetra lorem, et congue lacus. In id dictum lectus. Sed ac volutpat nisl. Suspendisse lobortis imperdiet ullamcorper.
'
---


- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js let's you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.