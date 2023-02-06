import { Menu } from "@/utils/menus";

const Footer = () => {
  return (
    <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src="assets/img/logo.svg" width="47" alt="Silicon" />
              May Accounting & Services
            </div>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">
              เรารับทำบัญชีโดยเน้นคุณภาพงาน ถูกต้อง ซื่อสัตย์ และรวดเร็ว
              เราอบรมและฝึกฝนนักบัญชีให้มีความเชียวชาญในวิชาชีพ
              และมีความรับผิดชอบในการทำงาน
              จึงมีลูกค้าให้ความไว้วางใจใช้บริการทำบัญชีเพิ่มมากขึ้นและบอกต่อผู้ต้องการใช้บริการทำบัญชี
            </p>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0 text-center">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <ul className="nav flex-column pb-lg-1 mb-lg-3 ">
                  <li className="nav-item">
                    <a
                      href={Menu.home.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      {Menu.home.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={Menu.about.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      {Menu.about.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={Menu.contact.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2 px-4 px-md-0"
                    >
                      {Menu.contact.title}
                    </a>
                  </li>
                </ul>
                <div className="d-flex justify-content-evenly my-2 my-md-0">
                  <a
                    href="#"
                    className="btn btn-icon btn-outline-secondary btn-facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>

                  <a
                    href="#"
                    className="btn btn-icon btn-outline-secondary btn-twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>

                  <a
                    href="#"
                    className="btn btn-icon btn-outline-secondary btn-instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2">บริการของเรา</h6>

                <ul className="nav flex-column pb-lg-1 mb-lg-3">
                  <li className="nav-item">
                    <a
                      href={Menu.accounting.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      <i className="bx bxs-chevron-right"></i>
                      {Menu.accounting.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={Menu.teachAccount.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      <i className="bx bxs-chevron-right"></i>
                      {Menu.teachAccount.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={Menu.audit.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      <i className="bx bxs-chevron-right"></i>
                      {Menu.audit.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={Menu.setupTexation.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      <i className="bx bxs-chevron-right"></i>
                      {Menu.setupTexation.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={Menu.companyRegis.link}
                      className="nav-link d-inline-block px-0 pt-1 pb-2"
                    >
                      <i className="bx bxs-chevron-right"></i>
                      {Menu.companyRegis.title}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">
            &copy; All rights reserved. Made by
          </span>
          <a
            className="nav-link d-inline-block p-0"
            href="https://createx.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Createx Studio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
