import React from "react";
import Layout from "@/components/layout/Layout";
import Service10 from "@/components/sections/Service10";
import CallToActionSoftware from "@/components/sections/CallToActionSoftware";
import BlogSoftware from "@/components/sections/BlogSoftware";
import TeamSoftware from "@/components/sections/TeamSoftware";

function software() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <TeamSoftware />
      <Service10 />
      <CallToActionSoftware />
      <BlogSoftware />
    </Layout>
  );
}

export default software;
