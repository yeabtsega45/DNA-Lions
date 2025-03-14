import React from "react";
import Layout from "@/components/layout/Layout";
import Service10 from "@/components/sections/Service10";
import CallToActionSoftware from "@/components/sections/CallToActionSoftware";
// import TeamSoftware from "@/components/sections/TeamSoftware";
import About8 from "@/components/sections/About8";

function software() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Software Solutions"
      breadcrumbImage="/assets/images/software f.jpg"
    >
      {/* <TeamSoftware /> */}
      <About8 />
      <Service10 />
      <CallToActionSoftware />
    </Layout>
  );
}

export default software;
