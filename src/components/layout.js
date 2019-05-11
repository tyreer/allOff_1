import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header/header";
import "./layout.css";

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header siteTitle={data.site.siteMetadata.title} />}
  />
);

export default Layout;
