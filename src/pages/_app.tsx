import "@/styles/vendor/boxicons/css/boxicons.min.css";
import "@/styles/vendor/swiper/swiper-bundle.min.css";
import "@/styles/vendor/lightgallery/css/lightgallery-bundle.min.css";
import "@/styles/vendor/img-comparison-slider/dist/styles.css";
import "@/styles/vendor/nouislider/dist/nouislider.min.css";
import "@/styles/vendor/prismjs/themes/prism.css";
import "@/styles/vendor/prismjs/plugins/toolbar/prism-toolbar.css";
import "@/styles/vendor/prismjs/plugins/line-numbers/prism-line-numbers.css";
import "@/styles/theme.css";
import "@/styles/styles.css";

import type { AppProps } from "next/app";
import ScriptComponent from "@/components/script-component";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScriptComponent />
    </Layout>
  );
}
