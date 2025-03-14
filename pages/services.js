import React from "react";
import Layout from "@/components/layout/Layout";
import BlogSoftware from "@/components/sections/BlogSoftware";

function services() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Services"
      breadcrumbImage="/assets/images/services .jpg"
    >
      <BlogSoftware />
    </Layout>
  );
}

export default services;
