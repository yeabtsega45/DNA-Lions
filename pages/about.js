import React from "react";
import Layout from "@/components/layout/Layout";
import About4 from "@/components/sections/About4";
import About3 from "@/components/sections/About3";
import Tab1 from "@/components/sections/Tab1";

function about() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="About Us"
      breadcrumbImage="/assets/images/about us .jpg"
    >
      <About4 />
      <About3 />
      <Tab1 />
    </Layout>
  );
}

export default about;
