import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <StaticImage
              alt="Molbert family picture from a hike in Glacier National Park."
              src="../images/glacier_pic.jpg"
          />
      </Layout>
  )
}

export default IndexPage
