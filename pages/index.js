import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
import Home from "./header";
import About from "./about";

function Homepage() {
  return (
    <div>
      <Head>
        <title>'Welcome to Next.js!'</title>
        <meta name="description" content="Manually created Nextjs App" />
        <link rel="icon" href="/pro.ico" />
      </Head>
    </div>
  );
}

export default Homepage;


