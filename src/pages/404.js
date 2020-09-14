import React from "react";
import Layout from "components/Layout";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.svg";

const NotFoundPage = () => (
  <>
    <Helmet
      title={`404`}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
);

export default NotFoundPage;