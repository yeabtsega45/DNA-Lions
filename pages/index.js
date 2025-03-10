import FloatingMenu from "@/components/layout/FloatingMenu";
import Layout from "@/components/layout/Layout";
import HeroSlider1 from "@/components/sections/HeroSlider1";
import { useState } from "react";
import Head from "next/head";
import About11 from "@/components/sections/About11";
import Process3 from "@/components/sections/Process3";
import Service8 from "@/components/sections/Service8";
import TestemonialHome from "@/components/sections/TestemonialHome";
import Client6 from "@/components/sections/Client6";

export default function Home1() {
  // Floating
  const [isFloating, setFloating] = useState(false);
  const handleFloating = () => setFloating(!isFloating);

  return (
    <>
      <Head>
        <title>DNA Lions - Accounting Firm</title>
      </Head>
      <Layout headerStyle={1} footerStyle={1}>
        <HeroSlider1 />
        <About11 />
        <Process3 />
        <Service8 />
        <TestemonialHome />
        <Client6 />
        <FloatingMenu handleFloating={handleFloating} isFloating={isFloating} />
      </Layout>
    </>
  );
}
