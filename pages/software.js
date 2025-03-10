import React from "react";
import Layout from "@/components/layout/Layout";
import Service10 from "@/components/sections/Service10";
import CallToActionSoftware from "@/components/sections/CallToActionSoftware";

function software() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Service10 />
        <CallToActionSoftware />
      </Layout>
    </>
  );
}

export default software;
