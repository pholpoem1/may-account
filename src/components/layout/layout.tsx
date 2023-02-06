import { Fragment, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <main className="page-wrapper">
        <Header />
        <div className="bg-secondary">{children}</div>
      </main>

      <Footer />
      <a href="#top" className="btn-scroll-top" data-scroll>
        <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
      </a>
    </Fragment>
  );
};

export default Layout;
