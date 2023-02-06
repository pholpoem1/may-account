import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">Our Service</h2>
      </div>

      <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5 h-50">
        <div className="row">
          <div className="col-md-6 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="ps-lg-5 text-end">
              <Image
                src="/assets/img/services/service02.jpg"
                className="rounded-3"
                alt="Image"
                height={400}
                width={400}
              />
            </div>
          </div>
          <div className="col-md-6 ordr-md-1">
            <h2 className="h3 mb-sm-4">รับทำบัญชี</h2>
            <ul className="list-unstyled d-md-none d-xl-block pb-2 pb-md-3 mb-3">
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-check lead text-primary me-2"></i>
                Sagittis quam egestas sit sit convallis turpis sit augue
                interdum morbi.
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-check lead text-primary me-2"></i>
                Sollicitudin cursus habitasse adipiscing est sed aenean sapien.
              </li>
              <li className="d-flex align-items-center">
                <i className="bx bx-check lead text-primary me-2"></i>
                At arcu arcu morbi scelerisque nibh. Quam velit fermentum porta
                facilisi massa.
              </li>
            </ul>

            {/* <div className="border rounded-3 mb-4 mb-lg-5">
              <div className="row row-cols-1 row-cols-sm-2 g-0">
                <div className="col d-flex align-items-center border-end-sm border-bottom p-3">
                  <img
                    src="assets/img/services/icons/insurance.svg"
                    width="48"
                    alt="Icon"
                  />
                  <div className="ps-2 ms-1">
                    <h3 className="h6 mb-0">Insurance</h3>
                    <p className="fs-xs mb-0">
                      Nunc dui aliquam volutpat augue.
                    </p>
                  </div>
                </div>
                <div className="col d-flex align-items-center border-bottom p-3">
                  <img
                    src="assets/img/services/icons/banking.svg"
                    width="48"
                    alt="Icon"
                  />
                  <div className="ps-2 ms-1">
                    <h3 className="h6 mb-0">Banking risk</h3>
                    <p className="fs-xs mb-0">
                      Habitasse adipiscing aenean sapien.
                    </p>
                  </div>
                </div>
                <div className="col d-flex align-items-center border-end-sm p-3">
                  <img
                    src="assets/img/services/icons/payments.svg"
                    width="48"
                    alt="Icon"
                  />
                  <div className="ps-2 ms-1">
                    <h3 className="h6 mb-0">Payments</h3>
                    <p className="fs-xs mb-0">
                      At faucibus molestie egestas sed.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="btn btn-outline-primary">
                รายละเอียด
                <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-md-3 mb-lg-5 pb-5">
        <div className="row">
          <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="pe-lg-5 text-start">
              <Image
                src="/assets/img/services/service01.jpg"
                className="rounded-3"
                alt="Image"
                height={400}
                width={400}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="h3 mb-sm-4">วางระบบบัญชีและภาษีอากร</h2>
            <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">
              Orci, ac libero sit ultrices enim volutpat augue. Congue sit nulla
              velit ornare cras. Facilisis tempus non erat ornare imperdiet. In
              ac ullamcorper proin urna, lacus, tortor, ullamcorper egestas
              mattis mauris.
            </p>
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="btn btn-outline-primary">
                รายละเอียด
                <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
        <div className="row">
          <div className="col-md-6 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="ps-lg-5 text-end">
              <Image
                src="/assets/img/close-up-person-signing-certificate.jpg"
                className="rounded-3"
                alt="Image"
                height={400}
                width={400}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="h3 mb-sm-4">จดทะเบียนบริษัท</h2>
            <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">
              Sem scelerisque laoreet commodo velit. Fringilla tempor egestas
              mattis mauris eu dui in. Viverra enim velit fringilla turpis
              suspendisse amet ipsum, nisi sed.
            </p>
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="btn btn-outline-primary">
                รายละเอียด
                <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="row row-cols-1 row-cols-md-2">
        <div className="col py-4 my-2 my-sm-3">
          <a
            href="services-single-v1.html"
            className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2"
          >
            <div className="card-body pt-3">
              <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                {/* <img
                  src="assets/img/services/icons/cms.svg"
                  className="d-block m-1"
                  width="40"
                  alt="Icon"
                /> */}
                <i
                  className="bx bx-check bx-tada bx-rotate-90"
                  style={{ fontSize: 40, color: "#FFFF" }}
                ></i>
              </div>
              <h2 className="h4 d-inline-flex align-items-center">
                ตรวจสอบบัญชี
                <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
              </h2>
              <p className="fs-sm text-body mb-0">
                Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin
                aliquam a. Semper bibendum tellus non tellus, facilisi dignissim
                in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis
                consectetur gravida ac ac lectus cursus egestas.
              </p>
            </div>
          </a>
        </div>

        <div className="col py-4 my-2 my-sm-3">
          <a
            href="services-single-v1.html"
            className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2"
          >
            <div className="card-body pt-3">
              <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                <i
                  className="bx bxs-calculator bx-tada"
                  style={{ fontSize: 40, color: "#FFFF" }}
                ></i>
              </div>
              <h2 className="h4 d-inline-flex align-items-center">
                สอนทำบัญชี
                <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
              </h2>
              <p className="fs-sm text-body mb-0">
                Id eget blandit sapien cras massa lectus lorem placerat. Quam
                dolor commodo fermentum bibendum dictumst. Risus pretium eget at
                viverra eget. Sit neque adipiscing malesuada blandit justo,
                quam.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default OurServices;
