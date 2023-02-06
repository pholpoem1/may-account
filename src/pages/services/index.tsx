import { services } from "@/components/services/data";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Services = () => {
  const router = useRouter();
  let asPath = router.asPath;
  let position = asPath.search("#");
  asPath = asPath.substring(position + 1);

  const handleScrollToSection = (asPath: string) => {
    const yOffset = -280;
    const id = `#${asPath}`;
    const el = document.querySelector(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScrollToSection(asPath);
  }, [asPath]);

  return (
    <section className="container pb-2 pb-md-4 pb-lg-5 mb-3 my-5">
      <div className="accordion" id="accordion-services">
        {services.length > 0 &&
          services.map((item) => {
            console.log("asPath :>> ", asPath);

            console.log("item.id :>> ", item.id);
            return (
              <div
                className="accordion-item border-0 rounded-3 shadow-sm mb-3"
                key={item.id}
              >
                <h3 className="accordion-header" id={item.id}>
                  <button
                    className="accordion-button fs-xl shadow-none rounded-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${item.id}`}
                    aria-expanded={asPath === item.id}
                    aria-controls={item.id}
                  >
                    {item.title}
                  </button>
                </h3>
                <div
                  className={`accordion-collapse collapse ${
                    asPath === item.id ? "show" : undefined
                  }`}
                  id={`collapse-${item.id}`}
                  aria-labelledby={item.id}
                  data-bs-parent="#accordion-services"
                >
                  <div className="accordion-body pt-0">
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <div className="ps-md-3">
                        <p
                          className="mb-0"
                          dangerouslySetInnerHTML={{
                            __html: item.desc,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <section className="container">
        <div className="row justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
          <div className="col-xxl-8 col-xl-9 col-lg-10 pt-sm-2">
            <div className="d-sm-flex">
              <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
                <div className="card-body p-0">
                  <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-envelope"></i>
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3">
                    โปรดอย่าลังเลที่จะรับคำปรึกษา เราจะตอบกลับโดยเร็วที่สุด
                  </p>
                </div>
                <div className="card-footer border-0 p-0">
                  <a
                    href="mailto:maythicha@may-account.com"
                    className="btn btn-lg btn-primary"
                  >
                    ส่งอีเมลหาเรา
                  </a>
                </div>
              </div>
              <div className="vr text-border d-none d-sm-inline-block m-4"></div>
              <div className="card w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5">
                <div className="card-body p-0">
                  <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-phone-call"></i>
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3">
                    หากคุณต้องการความช่วยเหลือในทันที โทรหาเราได้ วันจันทร์ -
                    ศุกร์ เวลา 7:00 น. – 17:00 น.
                  </p>
                </div>
                <div className="card-footer border-0 p-0">
                  <a href="tel:+66648382805" className="btn btn-lg btn-primary">
                    โทรหาเรา
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
