import { Menu } from "@/utils/menus";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="header navbar navbar-expand-lg bg-light navbar-sticky">
      <div className="container px-3">
        <Link href={"/"} legacyBehavior>
          <a className="navbar-brand pe-3 me-5">
            <Image
              src="/assets/img/logo.svg"
              width={47}
              alt="Silicon"
              loading="lazy"
              height={44}
            />
            <span className="titleCompany">May Accounting & Services</span>
          </a>
        </Link>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">May Accounting & Services</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  onClick={() => {
                    router.push("/");
                  }}
                  type="button"
                  className="btn nav-link"
                >
                  {Menu.home.title}
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  บริการของเรา
                </a>
                <div className="dropdown-menu">
                  <div className="d-lg-flex pt-lg-3">
                    <div className="mega-dropdown-column">
                      <ul className="list-unstyled mb-3">
                        <li>
                          <button
                            onClick={() => {
                              router.push(Menu.accounting.link2);
                            }}
                            className="dropdown-item py-1"
                          >
                            {Menu.accounting.title}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              router.push(Menu.teachAccount.link2);
                            }}
                            className="dropdown-item py-1"
                          >
                            {Menu.teachAccount.title}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              router.push(Menu.audit.link2);
                            }}
                            className="dropdown-item py-1"
                          >
                            {Menu.audit.title}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              router.push(Menu.setupTexation.link2);
                            }}
                            className="dropdown-item py-1"
                          >
                            {Menu.setupTexation.title}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              router.push(Menu.companyRegis.link2);
                            }}
                            className="dropdown-item py-1"
                          >
                            {Menu.companyRegis.title}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href={Menu.about.link} className={"nav-link"}>
                  {Menu.about.title}
                </a>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => {
                    router.push(Menu.contact.link);
                  }}
                  className="btn nav-link"
                >
                  {Menu.contact.title}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
