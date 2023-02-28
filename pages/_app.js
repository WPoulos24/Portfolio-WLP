import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout className="bg-bg">
      <Component {...pageProps} key={router.route} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
