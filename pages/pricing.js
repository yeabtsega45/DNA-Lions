import React from "react";
import Layout from "@/components/layout/Layout";
import Contact3 from "@/components/sections/Contact3";
import Contact4 from "@/components/sections/Contact4";

function pricing() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Pricing"
      breadcrumbImage="/assets/images/pyment .jpg"
    >
      <Contact3 />
      <Contact4 />
    </Layout>
  );
}

export default pricing;
