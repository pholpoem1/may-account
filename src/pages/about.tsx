import { Menu } from "@/utils/menus";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <section className="mb-5 py-lg-4 py-xl-5">
      <div className="container pt-5">
        <div className="row align-items-center gy-5 pt-2 pt-sm-3 pt-md-4">
          <div className="col-lg-5 text-lg-start text-center">
            <h2 className="h4 mb-4 pb-lg-2">
              บริษัท เมย์ แอคเค้าติ้งส์ แอนด์ เซอร์วิสเซส จำกัด
            </h2>
            <p className="mb-4 pb-1 pb-sm-2 pb-lg-3">
              ประกอบกิจการเกี่ยวกับ รับทำบัญชี สอนทำบัญชี ตรวจสอบบัญชี
              วางระบบบัญชีและภาษีอากร จดทะเบียนบริษัท
              เรารับทำบัญชีโดยเน้นคุณภาพงาน ถูกต้อง ซื่อสัตย์ และรวดเร็ว
              เราอบรมและฝึกฝนนักบัญชีให้มีความเชียวชาญในวิชาชีพ
              และมีความรับผิดชอบในการทำงาน
              จึงมีลูกค้าให้ความไว้วางใจใช้บริการทำบัญชีเพิ่มมากขึ้นและบอกต่อผู้ต้องการใช้บริการทำบัญชี
            </p>
            <ul className="list-unstyled pb-3 mb-0 mb-lg-3">
              <li className="d-flex mb-3">
                <i className="bx bx-phone-call text-muted fs-xl mt-1 me-2"></i>
                <a href="tel:+66648382805" className="fw-medium">
                  0648382805
                </a>
              </li>

              <li className="d-flex mb-3">
                <i className="bx bx-envelope text-muted fs-xl mt-1 me-2"></i>
                <a
                  href="mailto:maythicha@may-account.com"
                  className="fw-medium"
                >
                  maythicha@may-account.com
                </a>
              </li>
            </ul>
            {/* <button
              onClick={() => {
                router.push(Menu.contact.link);
              }}
              className="btn btn-primary"
            >
              {Menu.contact.title}
            </button> */}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="row row-cols-sm-2 row-cols-1 g-4 align-items-center">
              <div className="col">
                <div className="card border-0">
                  <div className="card-body m-xl-3 m-1 text-center">
                    <a href="#" className="d-inline-block mb-4 pb-2">
                      <img
                        src="assets/img/about/clutch-logo-dark.svg"
                        width="116"
                        alt="Clutch"
                        className="d-dark-mode-none d-block"
                      />
                      <img
                        src="assets/img/about/clutch-logo-light.svg"
                        width="116"
                        alt="Clutch"
                        className="d-dark-mode-block d-none"
                      />
                    </a>
                    <h5 className="mb-3 fs-lg fw-normal lh-1">
                      <span className="h1 d-block w-100 mb-0">100%</span>
                      Positive Feedback
                    </h5>
                    <div className="mb-3 text-nowrap">
                      <i className="bx bxs-star text-warning fs-sm"></i>
                      <i className="bx bxs-star text-warning fs-sm"></i>
                      <i className="bx bxs-star text-warning fs-sm"></i>
                      <i className="bx bxs-star text-warning fs-sm"></i>
                      <i className="bx bxs-star text-warning fs-sm"></i>
                    </div>
                    <img
                      src="assets/img/about/members-light.png"
                      width="168"
                      alt="Members"
                      className="d-dark-mode-none d-block mx-auto"
                    />
                    <img
                      src="assets/img/about/members-dark.png"
                      width="168"
                      alt="Members"
                      className="d-dark-mode-block d-none mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0">
                  <div className="card-body m-xl-3 m-1 text-center">
                    <img
                      src="assets/img/about/chat-light.svg"
                      width="56"
                      alt="Icon"
                      className="d-dark-mode-none d-block mx-auto mb-4"
                    />
                    <img
                      src="assets/img/about/chat-dark.svg"
                      width="56"
                      alt="Icon"
                      className="d-dark-mode-block d-none mx-auto mb-4"
                    />
                    <h5 className="mb-3 fs-lg fw-normal lh-1">
                      <span className="h1 d-block w-100 mb-0">24/7</span>
                      Customer support
                    </h5>
                  </div>
                </div>
                <div className="card border-0 mt-4">
                  <div
                    className="card-body m-xl-3 m-1 bg-repeat-0 bg-position-top-end"
                    style={{
                      backgroundImage: "url(assets/img/about/graph.svg)",
                    }}
                  >
                    <h5 className="mb-3 fs-lg fw-normal lh-1 mt-5">
                      <span className="h1 d-block w-100 mb-0">+12k</span>
                      new leads for clients
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
