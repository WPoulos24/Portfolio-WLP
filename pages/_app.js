import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout className="bg-bg">
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
