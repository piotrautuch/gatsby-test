import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello there</h1>
    <p>My name is Piotr and I like programming.</p>
    <p>I have never used Gatsby before, but it looks like something worth learning about!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage