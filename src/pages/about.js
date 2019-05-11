import React from "react";

import About from "../components/about/about";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
);

export default SecondPage;
